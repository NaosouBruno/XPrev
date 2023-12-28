import { useState } from "react";
import "./nav.scss";
import ButtonsNav from "../../atoms/ButtonsNav/ButtonNav";
function NavHeader() {
  const [clicked, setClicked] = useState(false);

  return (
    <header>
      <nav className="navContainer">
        <div className="navContainer__title ">
          <h1>X-Prev</h1>
        </div>
        <ul className={`navContainer__items ${clicked && "open"}`}>
          <li onClick={() => setClicked(!clicked)}>
            <ButtonsNav name="Inicio" link="start" />
          </li>
          <li onClick={() => setClicked(!clicked)}>
            <ButtonsNav name="Quem Somos" link="about" />
          </li>
          <li onClick={() => setClicked(!clicked)}>
            <ButtonsNav name="Serviços" link="services" />
          </li>
          <li onClick={() => setClicked(!clicked)}>
            <ButtonsNav name="Agende sua consulta" link="contact" />
          </li>
        </ul>
        <div
          className={`nav-toggle ${clicked && "open"}`}
          onClick={() => setClicked(!clicked)}
        >
          <div className="burger-menu">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <h2 className="burguer-title">X-Prev</h2>
        </div>
      </nav>
    </header>
  );
}

export default NavHeader;
