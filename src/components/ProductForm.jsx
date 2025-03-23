import { useEffect, useState } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Definir o schema de validação para o produto
const schema = Yup.object({
  nome: Yup.string().required("Nome do produto é obrigatório"),
  descricao: Yup.string().required("Descrição é obrigatória"),
  preco: Yup.number().required("Preço é obrigatório").min(0, "O preço não pode ser negativo"),
  quantidade: Yup.number().required("Quantidade é obrigatória").min(1, "Quantidade deve ser pelo menos 1"),
  imagem_url: Yup.string().url("Deve ser uma URL válida").required("URL da imagem é obrigatória"), // Alterado para imagem_url
  loja_id: Yup.number().required("Loja_id é obrigatória")
});

const CadastroProduto = () => {
  const [produtos, setProdutos] = useState([]);
  const [show, setShow] = useState(false);
  const [editId, setEditId] = useState(null);

  // Função para abrir o modal
  const handleShow = () => {
    setShow(!show);
    setEditId(null);
    formik.resetForm();
  };

  // Função para buscar produtos
  const fetchProdutos = async () => {
    try {
      const res = await fetch("https://procureaki.onrender.com/produtos");
      const data = await res.json();
      setProdutos(data);
    } catch (error) {
      console.error("Erro ao carregar produtos", error);
      toast.error("Erro ao carregar produtos.");
    }
  };

  // Carregar os produtos ao montar o componente
  useEffect(() => {
    fetchProdutos();
  }, []);

  const handleSubmit = async (values) => {
    const dadosParaEnviar = {
      nome: values.nome,
      preco: values.preco,
      quantidade: values.quantidade,
      imagem_url: values.imagem_url,
      descricao: values.descricao,
      loja_id: Number(values.loja_id), // Converta para número
    };
  
    try {
      const response = await fetch('https://procureaki.onrender.com/produtos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dadosParaEnviar),
      });
  
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Erro ao salvar o produto');
      }
  
      const result = await response.json();
      console.log(result);
      toast.success("Produto salvo com sucesso!");
      handleShow(); // Fecha o modal
      fetchProdutos(); // Atualiza a lista de produtos
    } catch (error) {
      console.error('Erro na API:', error.message);
      toast.error("Erro na API.");
    }
  };

  // Função para excluir produto
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://procureaki.onrender.com/produtos/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Erro na resposta da API:", errorText);
        throw new Error("Erro ao excluir o produto.");
      }

      toast.success("Produto excluído com sucesso!");
      await fetchProdutos();
    } catch (error) {
      console.error("Erro ao excluir produto:", error);
      toast.error("Erro ao excluir produto.");
    }
  };

  // Formik para gerenciar o formulário
  const formik = useFormik({
    initialValues: {
      nome: "",
      descricao: "",
      preco: "",
      loja_id: 0,
      quantidade: "",
      imagem_url: "", // Alterado para imagem_url
    },
    validationSchema: schema,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <Button className="m-2" variant="primary" onClick={handleShow}>
        Adicionar Produto
      </Button>

      <Modal show={show} onHide={handleShow}>
        <Modal.Header closeButton>
          <Modal.Title>{editId ? "Editar Produto" : "Cadastrar Produto"}</Modal.Title>
        </Modal.Header>
        <Form onSubmit={formik.handleSubmit}>
          <Modal.Body>
            {Object.keys(formik.initialValues).map((field) => (
              <Form.Group className="mb-3" controlId={field} key={field}>
                <Form.Label>{field}</Form.Label>
                <Form.Control
                  type={field === "preco" || field === "quantidade"|| field === "id_loja" ? "number" : "text"}
                  name={field}
                  onChange={formik.handleChange}
                  value={formik.values[field]}
                  placeholder={`Digite ${field}`}
                />
                {formik.errors[field] && (
                  <div className="text-danger">{formik.errors[field]}</div>
                )}
                
              </Form.Group>
            ))}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleShow}>
              Fechar
            </Button>
            <Button variant="primary" type="submit">
              {editId ? "Atualizar" : "Salvar"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Preço</th>
            <th>Quantidade</th>
            <th>Imagem</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {produtos.length > 0 ? (
            produtos.map((produto, index) => (
              <tr key={produto.id}>
                <td>{index + 1}</td>
                <td>{produto.nome}</td>
                <td>{produto.descricao}</td>
                <td>{produto.preco}</td>
                <td>{produto.quantidade}</td>
                <td>{produto.loja_id}</td>
                <td>
                  <img
                    src={produto.imagem_url} // Alterado para imagem_url
                    alt={produto.nome}
                    style={{ width: "50px", height: "50px" }}
                  />
                </td>
                <td>
                  <Button
                    variant="warning"
                    size="sm"
                    onClick={() => {
                      setEditId(produto.id);
                      formik.setValues({
                        nome: produto.nome,
                        descricao: produto.descricao,
                        preco: produto.preco,
                        quantidade: produto.quantidade,
                        imagem_url: produto.imagem_url, // Alterado para imagem_url
                        loja_id: produto.loja_id
                      });
                      setShow(true);
                    }}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(produto.id)}
                  >
                    Excluir
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">
                Nenhum produto cadastrado.
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      <ToastContainer />
    </>
  );
};

export default CadastroProduto;