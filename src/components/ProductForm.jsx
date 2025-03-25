import { Button, Form, Modal } from "react-bootstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = Yup.object({
  nome: Yup.string().required("Nome do produto é obrigatório"),
  descricao: Yup.string().required("Descrição é obrigatória"),
  preco: Yup.number().required("Preço é obrigatório").min(0, "O preço não pode ser negativo"),
  quantidade: Yup.number().required("Quantidade é obrigatória").min(1, "Quantidade deve ser pelo menos 1"),
  imagem_url: Yup.string().url("Deve ser uma URL válida").required("URL da imagem é obrigatória"),
  loja_id: Yup.number().required("Loja_id é obrigatória"),
});
/* eslint-disable react/prop-types */
const CadastroProduto = ({ show, onClose, onProductAdded }) => {
  const handleSubmit = async (values) => {
    const dadosParaEnviar = {
      nome: values.nome,
      preco: values.preco,
      quantidade: values.quantidade,
      imagem_url: values.imagem_url,
      descricao: values.descricao,
      loja_id: Number(values.loja_id),
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

      toast.success("Produto salvo com sucesso!");
      onProductAdded(); // Atualiza a lista no ProductListados
    } catch (error) {
      toast.error(error.message || "Erro na API.");
    }
  };

  const formik = useFormik({
    initialValues: {
      nome: "",
      descricao: "",
      preco: "",
      loja_id: 0,
      quantidade: "",
      imagem_url: "",
    },
    validationSchema: schema,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <Modal show={show} onHide={onClose}>
        {/* <Modal.Header closeButton>
          <Modal.Title>Cadastrar Produto</Modal.Title>
        </Modal.Header> */}
        <Form onSubmit={formik.handleSubmit}>
          <Modal.Body>
            {Object.keys(formik.initialValues).map((field) => (
              <Form.Group className="mb-3" controlId={field} key={field}>
                <Form.Label>
                  {field.charAt(0).toUpperCase() + field.slice(1).replace('_', ' ')}
                </Form.Label>
                <Form.Control
                  type={field === "preco" || field === "quantidade" || field === "loja_id" ? "number" : "text"}
                  name={field}
                  onChange={formik.handleChange}
                  value={formik.values[field]}
                  placeholder={`Digite ${field.replace('_', ' ')}`}
                />
                {formik.errors[field] && (
                  <div className="text-danger">{formik.errors[field]}</div>
                )}
              </Form.Group>
            ))}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onClose}>
              Fechar
            </Button>
            <Button variant="primary" type="submit">
              Salvar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
      <ToastContainer />
    </>
  );
};

export default CadastroProduto;