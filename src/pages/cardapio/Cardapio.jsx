import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import './cardapio.css';

const products = [
  {
    id: 1,
    name: 'Café Brasil Premium',
    origin: 'Minas Gerais, Brasil',
    notes: 'Notas de chocolate e caramelo',
    price: 'R$ 45,00',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&q=80',
  },
  {
    id: 2,
    name: 'Café Colômbia Supremo',
    origin: 'Huila, Colômbia',
    notes: 'Notas de frutas vermelhas e mel',
    price: 'R$ 52,00',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80',
  },
  {
    id: 3,
    name: 'Café Etiópia Yirgacheffe',
    origin: 'Yirgacheffe, Etiópia',
    notes: 'Notas florais e cítricas',
    price: 'R$ 58,00',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&q=80',
  },
  {
    id: 4,
    name: 'Espresso Blend Artesanal',
    origin: 'Blend especial da casa',
    notes: 'Equilibrado e encorpado',
    price: 'R$ 48,00',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=80',
  },
  {
    id: 5,
    name: 'Café Guatemala Antigua',
    origin: 'Antigua, Guatemala',
    notes: 'Notas de cacau e especiarias',
    price: 'R$ 55,00',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80',
  },
  {
    id: 6,
    name: 'Descafeinado Premium',
    origin: 'Processo Swiss Water',
    notes: 'Sabor pleno sem cafeína',
    price: 'R$ 50,00',
    image: 'https://images.unsplash.com/photo-1481833761820-0509d3217039?w=600&q=80',
  },
];

export default function Cardapio() {
  return (
    <>
      <Header showLoginButton={false} />

      <section className="hero">
        <h1>Nossos Cafés</h1>
        <p>Selecione seus cafés favoritos e receba em casa</p>
        <div className="hero-actions">
          <button className="hero-btn btn-primary" type="button">
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
          </button>
          <Link to="/reserva" className="hero-btn btn-outline">
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

      <main className="catalog">
        <div className="products-grid">
          {products.map(({ id, name, origin, notes, price, image }) => (
            <div className="card" key={id}>
              <img className="card-img" src={image} alt={name} />
              <div className="card-body">
                <p className="card-title">{name}</p>
                <p className="card-origin">{origin}</p>
                <p className="card-notes">{notes}</p>
                <div className="card-footer">
                  <span className="card-price">{price}</span>
                  <button className="btn-add" type="button">
                    Adicionar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
