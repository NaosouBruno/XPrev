import "./services.scss";
import { AiOutlineWhatsApp } from "react-icons/ai";
function Services() {
  return (
    <section className="containerServices" id="services">
      <h2 className="containerServices__title">Conheças nossos serviços</h2>
      <ul className="containerServices__listServices">
        <li className="containerServices__itemService">
          <h2 style={{ color: "green" }}>Aposentadoria</h2>
          <p>
            A aposentadoria representa o benefício que conquistamos ao completar
            um período mínimo em nossa carreira ou ao atingir a idade requerida.
            Para obter informações detalhadas sobre esse processo, recomendamos
            que entre em contato com a X-Prev.
          </p>
        </li>
        <li className="containerServices__itemService">
          <h2 style={{color: "rgb(237 17 66)" }}> Auxílio Maternidade </h2>
          <p>
            {" "}
            Auxílio Maternidade é o suporte concedido durante o período de
            maternidade, proporcionando assistência financeira para assegurar
            tranquilidade às mães. Conte com a orientação especializada da X-Prev
            para esclarecimentos sobre esse benefício vital.
          </p>
        </li>
        <li className="containerServices__itemService">
          <h2 style={{ color: "yellow" }}> Revisão de Benefícios </h2>
          <p>
            {" "}
            Revisão de Benefícios é a oportunidade de verificar e aprimorar os
            benefícios previdenciários já concedidos. Para compreender melhor
            esse processo e garantir seus direitos, consulte a X-Prev, sua
            parceira em assuntos previdenciários.
          </p>
        </li>
        <li className="containerServices__itemService">
          <h2 style={{ color: "green" }}>Tudo relacionado ao INSS </h2>
          <p>
            Tudo relacionado ao INSS é abrangido pela experiência e conhecimento
            da X-Prev. Seja para esclarecimentos sobre aposentadoria, pensão, ou
            outros serviços previdenciários, estamos aqui para orientar e
            auxiliar em todas as suas necessidades.
          </p>
        </li>
        <li className="containerServices__itemService">
          <h2 style={{ color:"rgb(237 17 66)", textAlign: "center" }}>
            {" "}
            Benefícios Assistencias (BPC/LOAS){" "}
          </h2>
          <p>
            {" "}
            Benefícios Assistenciais (BPC/LOAS) representam um suporte
            fundamental para quem necessita de assistência social. A X-Prev
            oferece suporte e informações precisas sobre o Benefício de
            Prestação Continuada (BPC) e a Lei Orgânica da Assistência Social
            (LOAS), visando o seu bem-estar e segurança.
          </p>
        </li>
      </ul>
      <button type="button" className="containerServices__buttonServices">
        <AiOutlineWhatsApp
          color="green"
          className="introContainer__whatsLogo"
        />
        <a
          href="https://api.whatsapp.com/send?phone=5567984497410"
          className="introContainer__whatsTitle"
        >
          Entrar em contato
        </a>
      </button>
    </section>
  );
}

export default Services;
