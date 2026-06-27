import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import seloIcon from '../../assets/images/icons/selo.svg';
import coracaoIcon from '../../assets/images/icons/coracao.svg';
import relogioIcon from '../../assets/images/icons/relogio.svg';
import localIcon from '../../assets/images/icons/local.svg';
import estrelaIcon from '../../assets/images/icons/estrela.svg';
import '../../styles/style.css';
import '../../components/botaoCadastro/botao.css';

const diferenciais = [
  {
    icon: seloIcon,
    titulo: 'Grãos Selecionados',
    desc: 'Café 100% arábica de fazendas premiadas do Brasil e Colômbia',
  },
  {
    icon: coracaoIcon,
    titulo: 'Torra Artesanal',
    desc: 'Processo cuidadoso que realça o sabor único de cada origem',
  },
  {
    icon: relogioIcon,
    titulo: 'Frescor garantido',
    desc: 'Torrado sob demanda para máxima frescura e aroma',
  },
  {
    icon: localIcon,
    titulo: 'Experiência Única',
    desc: 'Ambiente acolhedor para apreciar cada xícara',
  },
];

const avaliacoes = [
  {
    comentario:
      '"O melhor café que já experimentei. A qualidade é incomparável e o ambiente perfeito para reuniões."',
    autor: 'Maria Silva',
    cargo: 'CEO, TechCorp',
  },
  {
    comentario:
      '"Descobri este lugar durante uma viagem de negócios. Agora é parada obrigatória sempre que estou na cidade."',
    autor: 'John Patterson',
    cargo: 'Empresário',
  },
  {
    comentario:
      '"Café excepcional e atendimento impecável. Recomendo para todos os apreciadores de café premium."',
    autor: 'Ana Costa',
    cargo: 'Diretora de Marketing',
  },
];

export default function Home() {
  function handleNewsletterSubmit(event) {
    event.preventDefault();
  }

  return (
    <main>
      <Header />

      <section className="apresenta_inicio">
        <h1 id="apresentacao">Café Artesanal de Excelência</h1>
        <p id="apresenta_desc">
          Descubra sabores únicos em cada xícara. Grãos selecionados, torra artesanal e um ambiente elegante para
          momentos especiais.
        </p>
        <Link to="/cadastro" className="btn">
          Cadastre-se
        </Link>
        <div id="img_brinde">
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80"
            alt="Xícara de café artesanal"
          />
        </div>
      </section>

      <section className="diferencial_aval">
        <div id="diferencial">
          <h2 id="titulo_dif">Nossos diferenciais</h2>
          <ol className="lista_diferenciais">
            {diferenciais.map(({ icon, titulo, desc }) => (
              <li key={titulo}>
                <img src={icon} alt="" />
                <p className="p_titulo">{titulo}</p>
                <p className="p_desc">{desc}</p>
              </li>
            ))}
          </ol>
        </div>

        <div id="avalia">
          <h2 id="titulo_aval">O Que Dizem Nossos Clientes</h2>

          <div className="avaliacoes_cards">
            {avaliacoes.map(({ comentario, autor, cargo }) => (
              <article className="avalia-card" key={autor}>
                <div className="estrelas" aria-label="5 estrelas">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <img key={index} src={estrelaIcon} alt="" />
                  ))}
                </div>
                <h4 className="comentario">{comentario}</h4>
                <div className="cliente">
                  <p className="autor">{autor}</p>
                  <p className="cargo">{cargo}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="newsletter">
        <h2 className="newsletter_titulo">Receba Novidades e Ofertas Exclusivas</h2>
        <p className="newsletter_desc">
          Assine nossa newsletter e fique por dentro dos lançamentos e eventos especiais
        </p>

        <form className="newsletter_form" onSubmit={handleNewsletterSubmit}>
          <input type="email" placeholder="Seu melhor e-mail" aria-label="Seu melhor e-mail" />
          <button type="submit">Assinar</button>
        </form>
      </section>

      <Footer />
    </main>
  );
}
