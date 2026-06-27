import Header from '../../components/Header/Header';
import './nossa-historia.css';

const paragrafos = [
  'A Lume nasceu de um desejo simples, mas ambicioso: iluminar a rotina das pessoas através de experiências sensoriais únicas. Para nós, o café nunca foi apenas uma bebida rápida para despertar, mas sim um ritual de excelência que merece ser celebrado com calma.',
  'A nossa jornada começou quando decidimos ir além do mercado tradicional para explorar o universo dos cafés especiais. Apaixonámo-nos pela dedicação dos pequenos produtores, pela riqueza dos micro-lotes e pela precisão da torra artesanal — o processo que, literalmente, traz à luz os aromas e notas mais complexos de cada grão.',
  'O nome Lume reflete exatamente isso: a chama da nossa busca constante pela perfeição e o calor de um espaço feito para acolher. Criámos este refúgio para que cada cliente possa desacelerar, saborear e partilhar momentos. Hoje, cada chávena que servimos é um pedaço desta história que continuamos a torrar e a moer, todos os dias, com a mesma paixão.',
];

export default function NossaHistoria() {
  return (
    <>
      <Header showLoginButton={false} />

      <main className="container-historia">
        <section className="historia-section">
          <h2 className="titulo-historia">Nossa história</h2>
          {paragrafos.map((texto) => (
            <p className="texto-historia" key={texto.slice(0, 30)}>
              {texto}
            </p>
          ))}
        </section>
      </main>
    </>
  );
}
