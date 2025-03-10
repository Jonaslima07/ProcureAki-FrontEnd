import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Formik } from "formik";
import * as yup from "yup";

function CadastrarLoja() {
  const schema = yup.object().shape({
    NomeLoja: yup.string().required("Nome da loja é obrigatório"),
    Cnpj: yup
      .string()
      .required("CNPJ é obrigatório")
      .matches(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, "CNPJ inválido"),
    hrOpen: yup.string().required("Horário de abertura é obrigatório"),
    hrClosed: yup.string().required("Horário de fechamento é obrigatório"),
    telefone: yup
      .string()
      .required("Telefone é obrigatório")
      .matches(/^\(\d{2}\) \d{4,5}-\d{4}$/, "Telefone inválido"),
    descricao: yup.string().required("Descrição é obrigatória"),
    cep: yup
      .string()
      .required("CEP é obrigatório")
      .matches(/^\d{5}-\d{3}$/, "CEP inválido"),
    rua: yup.string().required("Nome da rua é obrigatório"),
    cidade: yup.string().required("Cidade é obrigatória"),
    estado: yup.string().required("Estado é obrigatório"),
    numero: yup.string().required("Número é obrigatório"),
    email: yup.string().required("Email é obrigatório").email("Email inválido"),
    senha: yup
      .string()
      .required("Senha é obrigatória")
      .min(6, "A senha deve ter no mínimo 6 caracteres"),
  });

  const inputStyle = {
    borderRadius: "10px",
    borderColor: "black",
    width: "300px",
    height: "40px",
  };

  const buttonStyle = {
    backgroundColor: "#006D77",
    borderColor: "black",
    borderRadius: "18px",
    padding: "10px",
    fontSize: "13px",
    width: "150px",
    height: "44px",
    marginTop: "120px",
    display: "flex",
    textAlign: "left",
    paddingLeft: "20px",
    marginLeft: "60rem",
  };

  const groupStyle1 = { marginTop: "90px" };
  const groupStyle = { marginTop: "30px" };
  const textStyle = { fontSize: "18px" };

  return (
    <>
      <h2 style={{ marginTop: "50px", marginLeft: "550px", color: "#006D77" }}>
        Cadastro de Loja
      </h2>
      <Formik
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values);
        }}
        initialValues={{
          NomeLoja: "",
          Cnpj: "",
          hrOpen: "",
          hrClosed: "",
          telefone: "",
          descricao: "",
          cep: "",
          rua: "",
          cidade: "",
          estado: "",
          numero: "",
          email: "",
          senha: "",
        }}
      >
        {({ handleChange, handleBlur, values, errors, touched }) => (
          <Form>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formGridStoreName" style={groupStyle1}>
                  <Form.Label>Nome da Loja*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Digite o nome da loja"
                    className="custom-input"
                    style={inputStyle}
                    name="NomeLoja"
                    value={values.NomeLoja}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.NomeLoja && !!errors.NomeLoja}
                  />
                  {touched.NomeLoja && errors.NomeLoja && (
                    <Form.Control.Feedback type="invalid">
                      {errors.NomeLoja}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>

                <Form.Group controlId="formGridCNPJ" style={groupStyle}>
                  <Form.Label>CNPJ*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="00.000.000/0000-00"
                    className="custom-input"
                    maxLength="18"
                    style={inputStyle}
                    name="Cnpj"
                    value={values.Cnpj}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.Cnpj && !!errors.Cnpj}
                  />
                  {touched.Cnpj && errors.Cnpj && (
                    <Form.Control.Feedback type="invalid">
                      {errors.Cnpj}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>

                <Form.Group controlId="formGridStoreHours" style={groupStyle}>
                  <Form.Text className="text-muted" style={textStyle}>
                    Horário de funcionamento:
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formGridOpeningHours" style={groupStyle}>
                  <Form.Label>Horário de abertura*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Digite o horário"
                    className="custom-input"
                    style={inputStyle}
                    name="hrOpen"
                    value={values.hrOpen}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.hrOpen && !!errors.hrOpen}
                  />
                  {touched.hrOpen && errors.hrOpen && (
                    <Form.Control.Feedback type="invalid">
                      {errors.hrOpen}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>

                <Form.Group controlId="formGridClosingHours" style={groupStyle}>
                  <Form.Label>Horário de fechamento*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Digite o horário"
                    className="custom-input"
                    style={inputStyle}
                    name="hrClosed"
                    value={values.hrClosed}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.hrClosed && !!errors.hrClosed}
                  />
                  {touched.hrClosed && errors.hrClosed && (
                    <Form.Control.Feedback type="invalid">
                      {errors.hrClosed}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>

                <Form.Group controlId="formGridPhone" style={groupStyle}>
                  <Form.Label>Telefone*</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="(83) 99123-4567"
                    className="custom-input"
                    style={inputStyle}
                    name="telefone"
                    value={values.telefone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.telefone && !!errors.telefone}
                  />
                  {touched.telefone && errors.telefone && (
                    <Form.Control.Feedback type="invalid">
                      {errors.telefone}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>
                <Form.Group controlId="formGridEmail" style={groupStyle}>
                  <Form.Label>Email*</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="exemplo@dominio.com"
                    className="custom-input"
                    style={inputStyle}
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.email && !!errors.email}
                  />
                  {touched.email && errors.email && (
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>

                <Form.Group controlId="formGridSenha" style={groupStyle}>
                  <Form.Label>Senha*</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Sua senha"
                    className="custom-input"
                    style={inputStyle}
                    name="senha"
                    value={values.senha}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.senha && !!errors.senha}
                  />
                  {touched.senha && errors.senha && (
                    <Form.Control.Feedback type="invalid">
                      {errors.senha}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>
              </Col>

              <Col>
                <Form.Group controlId="formGridDescription" style={groupStyle1}>
                  <Form.Label>Descrição*</Form.Label>
                  <Form.Control
                    type="text"
                    className="custom-input"
                    style={{
                      borderRadius: "10px",
                      borderColor: "black",
                      width: "350px",
                      height: "200px",
                    }}
                    required
                    name="descricao"
                    value={values.descricao}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.descricao && !!errors.descricao}
                  />
                  {touched.descricao && errors.descricao && (
                    <Form.Control.Feedback type="invalid">
                      {errors.descricao}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>

                <Form.Group controlId="formGridAddress" style={groupStyle}>
                  <Form.Label>Endereço</Form.Label>
                </Form.Group>

                <Form.Group controlId="formGridCep" style={groupStyle}>
                  <Form.Label>CEP*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="00000-000"
                    className="custom-input"
                    maxLength="9"
                    style={inputStyle}
                    name="cep"
                    value={values.cep}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.cep && !!errors.cep}
                  />
                  {touched.cep && errors.cep && (
                    <Form.Control.Feedback type="invalid">
                      {errors.cep}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>

                <Form.Group controlId="formGridRua" style={groupStyle}>
                  <Form.Label>Nome da rua*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Avenida paulista"
                    className="custom-input"
                    style={inputStyle}
                    name="rua"
                    value={values.rua}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.rua && !!errors.rua}
                  />
                  {touched.rua && errors.rua && (
                    <Form.Control.Feedback type="invalid">
                      {errors.rua}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>

                <Form.Group controlId="formGridCidade" style={groupStyle}>
                  <Form.Label>Cidade*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="São Paulo"
                    className="custom-input"
                    style={inputStyle}
                    name="cidade"
                    value={values.cidade}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.cidade && !!errors.cidade}
                  />
                  {touched.cidade && errors.cidade && (
                    <Form.Control.Feedback type="invalid">
                      {errors.cidade}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>

                <Form.Group controlId="formGridEstado" style={groupStyle}>
                  <Form.Label>Estado*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="SP"
                    className="custom-input"
                    style={inputStyle}
                    name="estado"
                    value={values.estado}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.estado && !!errors.estado}
                  />
                  {touched.estado && errors.estado && (
                    <Form.Control.Feedback type="invalid">
                      {errors.estado}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>

                <Form.Group controlId="formGridNumero" style={groupStyle}>
                  <Form.Label>Número*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="123"
                    className="custom-input"
                    style={inputStyle}
                    name="numero"
                    value={values.numero}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.numero && !!errors.numero}
                  />
                  {touched.numero && errors.numero && (
                    <Form.Control.Feedback type="invalid">
                      {errors.numero}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>
              </Col>
            </Row>
            <Button variant="primary" type="submit" style={buttonStyle}>
              Cadastrar Loja
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default CadastrarLoja;
