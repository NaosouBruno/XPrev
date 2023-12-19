import "./intro.scss";
import Logo from "../../assets/logo-sem-fundo.png";
import { AiOutlineWhatsApp } from "react-icons/ai";
function Intro() {
  return (
    <section className="introContainer">
      <div>
        <h1 className="introContainer__title">
          Seja bem vindo a{" "}
          <span className="introContainer__nameTitle">XPREV</span>
        </h1>
      </div>
      <div>
        <p>Assessoria e Consultoria Previdenciária</p>
      </div>
      <div>
        <span>Atendemos todo território nacional </span>
      </div>
      <div className="introContainer__infoLarge">
        <p>
          A sua satisfação é a nossa principal prioridade! Estamos disponíveis
          para atendimento remoto em todo o território nacional Fique à vontade
          para entrar em contato conosco através do nosso número no WhatsApp:
        </p>
        <div className="introContainer__infoBottom">
          <span>(67) 98449-7410 </span>
          <span> Ou pode usar algum dos botões abaixo</span>
        </div>
      </div>

      <div className="introContainer__buttonGroup">
        <button type="button" className="introContainer__buttonServices">
          <img src={Logo} alt="Logo X-PREV" className="introContainer__logo" />
          Nossos serviços
        </button>
        <button type="button" className="introContainer__buttonWhatsApp">
          <AiOutlineWhatsApp
            color="green"
            className="introContainer__whatsLogo"
          />
          <a
            href="https://api.whatsapp.com/send?phone=5567984497410"
            className="introContainer__whatsTitle"
          >
            WhatsApp
          </a>
        </button>
      </div>
    </section>
  );
}

export default Intro;
