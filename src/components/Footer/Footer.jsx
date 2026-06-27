import { Link } from 'react-router-dom';
import '../../styles/style.css';

export default function Footer() {
  return (
    <footer className="rodape">
      <div className="rodape_conteudo">
        <div className="rodape_coluna rodape_marca">
          <h3>Café Artesanal</h3>
          <p>Elevando a experiência do café a um novo patamar de excelência.</p>
        </div>

        <div className="rodape_coluna">
          <h4>Navegação</h4>
          <Link to="/">Início</Link>
          <Link to="/cardapio">Cardápio</Link>
          <Link to="/nossa-historia">Nossa História</Link>
          <Link to="/contato">Contato</Link>
        </div>

        <div className="rodape_coluna">
          <h4>Contato</h4>
          <p>Rua do Café, 123</p>
          <p>Salvador, BA</p>
          <p>+55 11 9999-9999</p>
          <p>contato@cafeartesanal.com</p>
        </div>

        <div className="rodape_coluna">
          <h4>Horário</h4>
          <p>Segunda - Sexta: 7h - 20h</p>
          <p>Sábado: 8h - 22h</p>
          <p>Domingo: 8h - 18h</p>
        </div>
      </div>

      <p className="rodape_direitos">© 2026 Café Artesanal. Todos os direitos reservados.</p>
    </footer>
  );
}
