import { Link, useNavigate } from 'react-router-dom';
import iconSvg from '../../assets/images/icon.svg';
import emailIcon from '../../assets/images/email.svg';
import cadeadoIcon from '../../assets/images/cadeado.svg';
import googleLogo from '../../assets/images/Google-Logo.svg';
import './login.css';

export default function Login() {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate('/nossa-historia');
  }

  return (
    <main>
      <section className="login">
        <div className="login-esquerda">
          <div className="apresentacao">
            <img className="logo-img" src={iconSvg} alt="" />
            <span className="logo-nome">Lume</span>
            <h2>Bem-vindo</h2>
            <p>Entre para acessar sua conta e fazer pedidos</p>
          </div>

          <div className="form-login">
            <form onSubmit={handleSubmit}>
              <div className="input-wrapper">
                <img className="icone" src={emailIcon} alt="email" />
                <input
                  className="input-login"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="seu@email.com"
                  required
                />
              </div>

              <div className="input-wrapper">
                <img className="icone" src={cadeadoIcon} alt="senha" />
                <input
                  className="input-login"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  required
                />
              </div>

              <button className="botao-login" type="submit">
                Entrar
              </button>

              <div className="divisor">
                <span>ou</span>
              </div>

              <button className="botao-google" type="button">
                <img src={googleLogo} alt="Google" />
                Continuar com Google
              </button>
            </form>

            <p className="cadastro-link">
              Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
            </p>
          </div>
        </div>

        <div className="imagem-experiencia">
          <img
            src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=900&q=80"
            alt="Experiência Lume"
          />
        </div>
      </section>
    </main>
  );
}
