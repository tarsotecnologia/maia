import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  font-family: 'Roboto', sans-serif;
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
`;

const Div = styled.div`
  font-family: 'Roboto', sans-serif;
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
`;

const Button = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  background-color: #28a745;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #218838;
  }
`;

export default function Home() {
  const [formData, setFormData] = useState({
    unidade: '',
    nome: '',
    email: '',
    celular: '',
    cpf: '',
    rg: '',
    proprietario: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/cadastro', formData);
      alert('Cadastro realizado com sucesso!!');
      setFormData({
        unidade: '',
        nome: '',
        email: '',
        celular: '',
        cpf: '',
        rg: '',
        proprietario: '',
      });
    } catch (error) {
      alert('Erro ao realizar o cadastro');
      console.error(error);
    }
  };

  return (
    <Container>
      <Title>Cadastro Facial Moradores - Edificio Maia</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Unidade:</Label>
          <Input type="number" name="unidade" min="10" max="114" maxLength={3} value={formData.unidade} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label>Nome:</Label>
          <Input type="text" name="nome" value={formData.nome} onChange={handleChange} maxLength={200} required />
        </FormGroup>
        <FormGroup>
          <Label>E-mail:</Label>
          <Input type="email" name="email" value={formData.email} onChange={handleChange} maxLength={200} required />
        </FormGroup>
        <FormGroup>
          <Label>Celular:</Label>
          <Input type="text" name="celular" value={formData.celular} onChange={handleChange} maxLength={20} required />
        </FormGroup>
        <FormGroup>
          <Label>CPF:</Label>
          <Input type="text" name="cpf" value={formData.cpf} onChange={handleChange}  maxLength={20} required />
        </FormGroup>
        <FormGroup>
          <Label>RG:</Label>
          <Input type="text" name="rg" value={formData.rg} onChange={handleChange}  maxLength={20} required />
        </FormGroup>
        <FormGroup>
          <Label>Proprietário:</Label>
          <Select name="proprietario" value={formData.proprietario} onChange={handleChange} required>
            <option value="">Selecione</option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </Select>
        </FormGroup>
        <Button type="submit">Cadastrar</Button>
      </Form>
      <Div>
          <p>Desenvolvido por: <a href="https://tarsoit.org" target='blank'>Tarso Tecnologia</a></p>
          <image src="../public/logo-tarso-black.png" alt="Tarso Tecnologia" />
        </Div>
    </Container>
    
  );
}
