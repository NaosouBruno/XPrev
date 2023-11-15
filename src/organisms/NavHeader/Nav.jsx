import "./nav.scss";
import BurguerMenu from "../../molecules/BurguerMenu/Burguer";
import { useState } from "react";
export default function NavHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
      <div className="nav-group">
        <BurguerMenu onToggle={toggleMenu} />
        <h2>X-Prev</h2>
      </div>
      <ul className="nav-items">
        <li key="item1">Quem Somos</li>
        <li key="item2">Serviços</li>
        <li key="item3">Agende sua consulta</li>
      </ul>
    </nav>
  );
}
