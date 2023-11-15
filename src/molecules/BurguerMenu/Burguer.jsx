import "./burguer.scss";

// eslint-disable-next-line react/prop-types
export default function BurguerMenu({ onToggle }) {
  return (
    <div className="burger-menu" onClick={onToggle}>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
}
