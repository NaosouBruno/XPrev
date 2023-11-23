import PropTypes from "prop-types";
import "./Alert.scss";

export default function Alert(props) {
  function getAlertIcon() {
    switch (props.type) {
      case "success":
        return "✅";
    }
  }
  return (
    <div className={`alert ${props.type}`}>
      <span>{getAlertIcon()}</span>
      <span>{props.text}</span>
    </div>
  );
}

Alert.propTypes = {
  text: PropTypes.string,
  type: "success",
};
