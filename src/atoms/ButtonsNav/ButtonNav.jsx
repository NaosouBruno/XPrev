/* eslint-disable react/prop-types */
import "./ButtonNav.scss";
function ButtonsNav(props) {
  return (
    <button className="btnNav--itemName">
      <a href={`#${props.link}`} className="btnNav--itemLink">
        {props.name}
      </a>
    </button>
  );
}

export default ButtonsNav;