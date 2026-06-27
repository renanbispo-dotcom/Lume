import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import { masks } from '../../utils/masks';
import './reserva.css';

export default function Reserva() {
  const [telefone, setTelefone] = useState('');

  function handleTelefoneChange(event) {
    setTelefone(masks.telefone(event.target.value));
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <Header showLoginButton={false} />

      <main className="reserva-page">
        <section className="reserva-hero" aria-labelledby="titulo-reserva">
          <h2 id="titulo-reserva">Reserve sua Mesa</h2>
          <p>Garanta seu lugar em nosso ambiente acolhedor</p>

          <div className="reserva-actions" aria-label="Escolha uma ação">
            <Link className="reserva-action reserva-action-light" to="/cardapio">
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              Comprar Café
            </Link>

            <Link className="reserva-action reserva-action-active" to="/reserva" aria-current="page">
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Reservar Mesa
            </Link>
          </div>
        </section>

        <section className="reserva-card" aria-label="Formulário de reserva">
          <form className="reserva-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="campo">
                <label htmlFor="data">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  Data
                </label>
                <input type="date" id="data" name="data" required />
              </div>

              <div className="campo">
                <label htmlFor="horario">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  Horário
                </label>
                <input type="time" id="horario" name="horario" required />
              </div>
            </div>

            <div className="campo">
              <label htmlFor="pessoas">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                Número de pessoas
              </label>
              <input type="number" id="pessoas" name="pessoas" min="1" max="20" required />
            </div>

            <div className="campo">
              <label htmlFor="nome">Nome completo</label>
              <input type="text" id="nome" name="nome" placeholder="Seu nome" autoComplete="name" required />
            </div>

            <div className="campo">
              <label htmlFor="telefone">Telefone</label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                value={telefone}
                onChange={handleTelefoneChange}
                placeholder="(11) 99999-9999"
                inputMode="numeric"
                maxLength={15}
                autoComplete="tel"
                required
              />
            </div>

            <div className="campo">
              <label htmlFor="observacoes">Observações (opcional)</label>
              <textarea id="observacoes" name="observacoes" placeholder="Alguma preferência especial?" />
            </div>

            <button className="reserva-submit" type="submit">
              Confirmar Reserva
            </button>
            <p className="reserva-note">Você receberá uma confirmação por e-mail e SMS</p>
          </form>
        </section>
      </main>
    </>
  );
}
