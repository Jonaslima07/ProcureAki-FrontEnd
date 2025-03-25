import { useEffect, useState } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const schema = Yup.object({
  nomeLoja: Yup.string().required("Nome da loja é obrigatório"),
  descricao: Yup.string().required("Descrição é obrigatória"),
  cnpj: Yup.string()
    .matches(/^\d{14}$/, "CNPJ deve ter 14 dígitos")
    .required("CNPJ é obrigatório"),
  horario_abertura: Yup.string().required("Horário de abertura é obrigatório"),
  horario_fechamento: Yup.string().required("Horário de fechamento é obrigatório"),
  cep: Yup.string()
    .matches(/^\d{8}$/, "CEP deve ter 8 dígitos")
    .required("CEP é obrigatório"),
  nomeRua: Yup.string().required("Nome da rua é obrigatório"),
  cidade: Yup.string().required("Cidade é obrigatória"),
  estado: Yup.string().required("Estado é obrigatório"),
  numero: Yup.string().required("Número é obrigatório"),
  telefone: Yup.string()
    .matches(/^\d{10,11}$/, "Telefone inválido")
    .required("Telefone é obrigatório"),
  email: Yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  senha: Yup.string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .required("Senha é obrigatória"),
  confirmarSenha: Yup.string()
    .oneOf([Yup.ref("senha"), null], "As senhas devem coincidir")
    .required("Confirmação de senha é obrigatória"),
  categoria: Yup.string().required("Categoria é obrigatória"),
  bairro: Yup.string().required('Bairro é obrigatório'),
  latitude:Yup.string().required('latitude é obrigatório'),
  longitude:Yup.string().required('latitude é obrigatório')

});

const CadastroLoja = () => {
  const [lojas, setLojas] = useState([]);
  const [show, setShow] = useState(false);
  const [editId, setEditId] = useState(null);
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const toggleMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  const handleShow = () => {
    setShow(!show);
    setEditId(null);
    formik.resetForm();
  };

  const fetchLojas = async () => {
    try {
      const res = await fetch("https://procureaki.onrender.com/lojas");
      const data = await res.json();
      // console.log(data); 
      setLojas(data);
    } catch (error) {
      console.error("Erro ao carregar lojas", error);
      toast.error("Erro ao carregar lojas.");
    }
  };

  useEffect(() => {
    fetchLojas();
  }, []);

  const handleSubmit = async (values) => {
    const endereco = {
      cep: values.cep,
      logradouro: values.nomeRua,
      cidade: values.cidade,
      estado: values.estado,
      numero: values.numero,
      bairro: values.bairro,
    };

    const categoria = {
      nome_categoria: values.categoria,

    };

    const localizacao = {
      latitude: values.latitude,
      longitude: values.longitude
    }

    const dadosParaEnviar = {
      nome: values.nomeLoja,
      descricao: values.descricao,
      cnpj: values.cnpj,
      horario_abertura: values.horario_abertura,
      horario_funcionamento: values.horario_fechamento,
      telefone: values.telefone,
      email: values.email,
      senha: values.senha,
      endereco: endereco,
      categoria: categoria,
      localizacao: localizacao
     
    };


    const method = editId ? "PUT" : "POST";
    const url = editId
      ? `https://procureaki.onrender.com/lojas/${editId}`
      : "https://procureaki.onrender.com/lojas";

    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dadosParaEnviar),
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error("Erro na API:", errorData);
        toast.error("Erro ao salvar loja. Verifique os dados.");
        return;
      }

      await fetchLojas();

      setShow(false);
      toast.success(editId ? "Loja atualizada com sucesso!" : "Loja cadastrada com sucesso!");
    } catch (error) {
      console.error("Erro na requisição:", error);
      toast.error("Erro ao conectar com o servidor.");
    }
  };

  const handleDelete = async (id) => {
    console.log("Tentando excluir loja com ID:", id); 
  
    try {
      const response = await fetch(`https://procureaki.onrender.com/lojas/${id}`, {
        method: "DELETE",
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Erro na resposta da API:", errorText);
        throw new Error("Erro ao excluir a loja.");
      }
  
      toast.success("Loja excluída com sucesso!");
      await fetchLojas();
    } catch (error) {
      console.error("Erro ao excluir loja:", error);
      toast.error("Erro ao excluir loja.");
    }
  };

  const formik = useFormik({
    initialValues: {
      nomeLoja: "", descricao: "", cnpj: "", horario_abertura: "", horario_fechamento: "",
      cep: "", nomeRua: "", cidade: "", estado: "", numero: "", telefone: "", email: "",
      senha: "", confirmarSenha: "", categoria: "", bairro:"", latitude:"", longitude:""
    },
    validationSchema: schema,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <Button className="m-2" variant="primary" onClick={handleShow} style={styles.btnadd}>Adicionar Loja</Button>
      <Modal show={show} onHide={handleShow}>
        <Modal.Header closeButton>
          <Modal.Title>{editId ? "Editar Loja" : "Cadastrar Loja"}</Modal.Title>
        </Modal.Header>
        <Form onSubmit={formik.handleSubmit}>
          <Modal.Body>
            {Object.keys(formik.initialValues).map((field) => (
              <Form.Group className="mb-3" controlId={field} key={field}>
                <Form.Label>{field}</Form.Label>
                {field === "senha" || field === "confirmarSenha" ? (
                  <div className="d-flex align-items-center">
                    <Form.Control
                      type={mostrarSenha ? "text" : "password"}
                      name={field}
                      onChange={formik.handleChange}
                      value={formik.values[field]}
                      placeholder={`Digite ${field}`}
                    />
                    <Button
                      variant="outline-secondary"
                      onClick={toggleMostrarSenha}
                      style={styles.mostrarBtn}
                    >
                      {mostrarSenha ? <FaEyeSlash /> : <FaEye />} {/* Ícones de olho */}
                    </Button>
                  </div>
                ) : (
                  <Form.Control
                    type={
                      field === "email" ? "email" :
                      ["telefone", "cnpj", "cep"].includes(field) ? "tel" :
                      ["horario_abertura", "horario_fechamento"].includes(field) ? "time" : "text"
                    }
                    name={field}
                    onChange={formik.handleChange}
                    value={formik.values[field]}
                    placeholder={`Digite ${field}`}
                  />
                )}
                {formik.errors[field] && <div className="text-danger">{formik.errors[field]}</div>}
              </Form.Group>
            ))}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleShow}>Fechar</Button>
            <Button variant="primary" type="submit">{editId ? "Atualizar" : "Salvar"}</Button>
          </Modal.Footer>
        </Form>
      </Modal>

      <Table striped bordered hover className="mt-3" style={styles.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>CNPJ</th>
            <th>Horário</th>
            <th>Cep</th>
            <th>Nome da rua</th>
            <th>Cidade</th>
            <th>Bairro</th>
            <th>Estado</th>
            <th>Número</th>
            <th>Telefone</th>
            <th>E-mail</th>
            <th>Categoria</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {lojas.length > 0 ? (
            lojas.map((loja, index) => (
              <tr key={loja.id}>
                <td>{index + 1}</td>
                <td>{loja.nome}</td>
                <td>{loja.descricao}</td>
                <td>{loja.cnpj}</td>
                <td>{loja.horario_abertura}</td>
                <td>{loja.horario_fechamento}</td>
                
                <td>{loja.endereco.cep}</td>
                <td>{loja.endereco.logradouro}</td>
                <td>{loja.endereco.cidade}</td>
                <td>{loja.endereco.bairro}</td>
                <td>{loja.endereco.estado}</td>
                <td>{loja.endereco.numero}</td>
                <td>{loja.telefone}</td>
                <td>{loja.email}</td>
                <td>{loja.categoria.nome_categoria}</td>
                <td>
                  <Button
                    style={styles.btnEdit}
                    variant="warning"
                    size="sm"
                    onClick={() => {
                      setEditId(loja.id);
                      formik.setValues({
                        nomeLoja: loja.nome,
                        descricao: loja.descricao,
                        cnpj: loja.cnpj,
                        horario_abertura: loja.horario_abertura.split(" - ")[0],
                        horario_fechamento: loja.horario_fechamento.split(" - ")[1],
                        cep: loja.endereco.cep,
                        nomeRua: loja.endereco.logradouro,
                        cidade: loja.endereco.cidade,
                        estado: loja.endereco.estado,
                        numero: loja.endereco.numero,
                        telefone: loja.telefone,
                        email: loja.email,
                        senha: loja.senha,
                        confirmarSenha: "",
                        categoria: loja.categoria.nome_categoria,
                        bairro: loja.endereco.bairro,
                        latitude:loja.latitude,
                        longitude:loja.longitude
                      });
                      setShow(true);
                    }}
                  >
                    Editar
                  </Button>
                  <Button
                    style={styles.btnDelete}
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(loja.id)}
                  >
                    Excluir
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr><td colSpan="8" className="text-center">Nenhuma loja cadastrada.</td></tr>
          )}
        </tbody>
      </Table>
      <ToastContainer />
    </>
  );
};

export default CadastroLoja;

const styles = {
  btnadd: {
    left: '30rem',
    position: 'relative',
    top: '25px',
    borderRadius: '4px',
    fontSize: '15px',
    backgroundColor: '#006D77',
    border: 'none'
  },
  table: {
    top: '50px',
    position: 'relative',
    right:'55px'
  },
  btnDelete: {
    backgroundColor: 'red',
    color: 'white',
    marginLeft: '4.3rem', 
    border: 'none',
    bottom:'1.8rem',
    position:'relative'
  },
  btnEdit: {
    backgroundColor: 'blue',
    border: 'none',
    color: 'white',
    marginTop:'1rem'
  },
  mostrarBtn: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#006D77',
    marginLeft: '10px'
  }
};