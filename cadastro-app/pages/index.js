import { useState } from 'react';
import axios from 'axios';
import '../styles/styles.css';

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
    } catch (error) {
      alert('Erro ao realizar o cadastro');
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Cadastro Facial Moradores - Edificio Maia</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Unidade:</label>
          <input type="text" name="unidade" value={formData.unidade} onChange={handleChange} required />
        </div>
        <div>
          <label>Nome:</label>
          <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />
        </div>
        <div>
          <label>E-mail:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Celular:</label>
          <input type="text" name="celular" value={formData.celular} onChange={handleChange} required />
        </div>
        <div>
          <label>CPF:</label>
          <input type="text" name="cpf" value={formData.cpf} onChange={handleChange} required />
        </div>
        <div>
          <label>RG:</label>
          <input type="text" name="rg" value={formData.rg} onChange={handleChange} required />
        </div>
        <label>
        Proprietário:
        <select name="proprietario" value={formData.proprietario} onChange={handleChange} required>
          <option value="">Selecione</option>
          <option value="Sim">Sim</option>
          <option value="Não">Não</option>
        </select>
      </label>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
