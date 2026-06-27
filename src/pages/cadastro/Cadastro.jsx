import { useState } from 'react';
import Header from '../../components/header/Header';
import { masks } from '../../utils/masks';
import './cadastro.css';

export default function Cadastro() {
  const [form, setForm] = useState({
    nome: '',
    nascimento: '',
    cpf: '',
    telefone: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;
    const maskFn = masks[name];
    setForm((prev) => ({
      ...prev,
      [name]: maskFn ? maskFn(value) : value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <Header />

      <main className="cadastro-page">
        <section className="cadastro-card" aria-label="Formulario de cadastro">
          <form className="cadastro-form" onSubmit={handleSubmit}>
            <div className="campo">
              <label htmlFor="nome">Nome completo</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={form.nome}
                onChange={handleChange}
                placeholder="Seu nome"
                autoComplete="name"
                required
              />
            </div>

            <div className="campo">
              <label htmlFor="nascimento">Data de Nascimento</label>
              <input
                type="text"
                id="nascimento"
                name="nascimento"
                value={form.nascimento}
                onChange={handleChange}
                placeholder="dd/MM/aaaa"
                inputMode="numeric"
                maxLength={10}
                autoComplete="bday"
                required
              />
            </div>

            <div className="campo">
              <label htmlFor="cpf">CPF</label>
              <input
                type="text"
                id="cpf"
                name="cpf"
                value={form.cpf}
                onChange={handleChange}
                placeholder="000.000.000-00"
                inputMode="numeric"
                maxLength={14}
                autoComplete="off"
                required
              />
            </div>

            <div className="campo">
              <label htmlFor="telefone">Telefone</label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                value={form.telefone}
                onChange={handleChange}
                placeholder="(11) 99999-9999"
                inputMode="numeric"
                maxLength={15}
                autoComplete="tel"
                required
              />
            </div>

            <button className="cadastro-submit" type="submit">
              Cadastrar
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
