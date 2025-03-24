import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, InputGroup } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const CriarContaForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    senha: '',
    nascimento: '',
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: '',
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = 'Nome de usuário é obrigatório.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório.';
    }

    if (!formData.senha.trim()) {
      newErrors.senha = 'Senha é obrigatória.';
    }

    if (!formData.nascimento.trim()) {
      newErrors.nascimento = 'Data de nascimento é obrigatória.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    alert('Conta criada com sucesso!');
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh', backgroundColor: '#78C2FF' }}>
      <Row className="w-100">
        <Col md={4} sm={12} className="p-5 rounded" style={cardStyle}>
          <h2 className="text-center" style={{ color: '#006D77', marginBottom: '80px' }}>ProcureAki</h2>
          <h4 className="text-center" style={{ marginTop: '-45px', fontSize: '28px' }}>Criar Conta</h4>
          <Form onSubmit={handleSubmit}>
            {/* Nome de Usuário */}
            <Form.Group controlId="username" className="mb-3">
              <Form.Label>Nome de Usuário</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite seu nome de usuário"
                value={formData.username}
                onChange={handleInputChange}
                isInvalid={!!errors.username}
              />
              {errors.username && <div className="error-text username-error">{errors.username}</div>}
            </Form.Group>

            {/* Email */}
            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Digite seu email"
                value={formData.email}
                onChange={handleInputChange}
                isInvalid={!!errors.email}
              />
              {errors.email && <div className="error-text email-error">{errors.email}</div>}
            </Form.Group>

            {/* Senha */}
            <Form.Group controlId="senha" className="mb-3">
              <Form.Label>Senha</Form.Label>
              <InputGroup>
                <Form.Control
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Digite sua senha"
                  value={formData.senha}
                  onChange={handleInputChange}
                  isInvalid={!!errors.senha}
                  style={{ paddingRight: '40px' }}
                />
                <div
                  onClick={toggleShowPassword}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer',
                    zIndex: 2,
                  }}
                >
                  {showPassword ? (
                    <FaEyeSlash style={{ color: '#006D77' }} />
                  ) : (
                    <FaEye style={{ color: '#006D77' }} />
                  )}
                </div>
              </InputGroup>
              {errors.senha && <div className="error-text senha-error">{errors.senha}</div>}
            </Form.Group>

            {/* Data de Nascimento */}
            <Form.Group controlId="nascimento" className="mb-4">
              <Form.Label>Data de Nascimento</Form.Label>
              <Form.Control
                type="date"
                value={formData.nascimento}
                onChange={handleInputChange}
                isInvalid={!!errors.nascimento}
              />
              {errors.nascimento && <div className="error-text nascimento-error">{errors.nascimento}</div>}
            </Form.Group>

            {/* Botão Criar Conta */}
            <Button variant="success" type="submit" style={buttonStyle}>
              Criar Conta
            </Button>
          </Form>

          <div className="text-center mt-3" style={loginRedirectStyle}>
            <p>
              Já tem uma conta?{' '}
              <a href="/login" style={{ color: '#006D77' }}>
                Faça login
              </a>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

// Estilos personalizados
const cardStyle = {
  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.7), rgba(120, 194, 255, 0.9))',
  boxShadow: '0 8px 30px rgba(255, 255, 255, 0.3)',
  borderRadius: '15px',
  transition: 'box-shadow 0.3s ease, transform 0.3s ease',
  maxWidth: '500px',
  width: '100%',
  position: 'relative',
  left: '340px',
  padding: '30px',
};

const buttonStyle = {
  backgroundColor: '#006D77',
  border: 'none',
  color: 'white',
  fontSize: '16px',
  padding: '8px',
  borderRadius: '10px',
  transition: 'background-color 0.3s, transform 0.3s',
  top: '18px',
  width: '211px',
  position: 'relative',
  left: '90px',
};

const loginRedirectStyle = {
  marginTop: '30px',
  fontSize: '14px',
  position: 'relative',
  top: '30px',
};

export default CriarContaForm;



/*
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, InputGroup } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    senha: '',
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: '',
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório.';
    }

    if (!formData.senha.trim()) {
      newErrors.senha = 'Senha é obrigatória.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    alert('Login realizado com sucesso!');
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh', backgroundColor: '#78C2FF' }}>
      <Row className="w-100">
        <Col md={4} sm={12} className="p-5 rounded" style={cardStyle}>
          <h2 className="text-center" style={{ color: '#006D77', marginBottom: '140px' }}>ProcureAki</h2>
          <h4 className="text-center" style={{ marginTop: '-45px', fontSize: '35px' }}>Login</h4>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Digite seu email"
                value={formData.email}
                onChange={handleInputChange}
                isInvalid={!!errors.email}
              />
              {errors.email && <div className="error-text email-error">{errors.email}</div>}
            </Form.Group>

            <Form.Group controlId="senha" className="mb-4">
              <Form.Label>Senha</Form.Label>
              <InputGroup>
                <Form.Control
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Digite sua senha"
                  value={formData.senha}
                  onChange={handleInputChange}
                  isInvalid={!!errors.senha}
                  style={{ paddingRight: '40px' }}
                />
                <div
                  onClick={toggleShowPassword}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer',
                    zIndex: 2,
                  }}
                >
                  {showPassword ? (
                    <FaEyeSlash style={{ color: '#006D77' }} />
                  ) : (
                    <FaEye style={{ color: '#006D77' }} />
                  )}
                </div>
              </InputGroup>
              {errors.senha && <div className="error-text senha-error">{errors.senha}</div>}
            </Form.Group>

            <Button variant="success" type="submit" style={buttonStyle}>
              Entrar
            </Button>
          </Form>

          <div className="text-center mt-3" style={createAccountStyle}>
            <p>
              Não tem uma conta ainda?{' '}
              <a href="/criar-conta" style={{ color: '#006D77' }}>
                Criar conta
              </a>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

// Estilos personalizados
const cardStyle = {
  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.7), rgba(120, 194, 255, 0.9))',
  boxShadow: '0 8px 30px rgba(255, 255, 255, 0.3)',
  borderRadius: '15px',
  transition: 'box-shadow 0.3s ease, transform 0.3s ease',
  maxWidth: '500px',
  width: '100%',
  position: 'relative',
  left: '340px',
  padding: '30px',
};

const buttonStyle = {
  backgroundColor: '#006D77',
  border: 'none',
  color: 'white',
  fontSize: '16px',
  padding: '8px',
  borderRadius: '10px',
  transition: 'background-color 0.3s, transform 0.3s',
  top: '18px',
  width: '211px',
  position: 'relative',
  left: '90px',
};

const createAccountStyle = {
  marginTop: '30px',
  fontSize: '14px',
  position: 'relative',
  top: '39px',
};

export default LoginForm;
*/