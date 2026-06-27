import Header from '../../components/header/Header';
import './contato.css';

const contatos = [
  { text: '@cafeteria.lume', className: 'gradient-magenta' },
  { text: '(71) 9 1111-2222', className: 'gradient-green' },
  { text: 'cafeteria@lume.com.br', className: 'gradient-rainbow' },
  { text: 'Cafeteria Lume', className: 'gradient-steel' },
];

export default function Contato() {
  return (
    <>
      <Header />

      <main className="contato-container">
        <section className="contato-section">
          <h1>Contatos</h1>
          <div className="contatos-grid">
            {contatos.map(({ text, className }) => (
              <div className={`contato-card ${className}`} key={text}>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
