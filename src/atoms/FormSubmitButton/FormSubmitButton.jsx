import PropTypes from "prop-types";
import CircularProgress from "../CircularProgress/CircularProgress";
import "./FormSubmitButton.scss";

export default function FormSubmitButton(props) {
  return (
    <button
      className="form-submit-button"
      disabled={props.disabled || props.isLoading}
      onClick={props.onClick}
    >
      {props.isLoading ? <CircularProgress /> : null}
      {props.text}
    </button>
  );
}

FormSubmitButton.propTypes = {
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
  text: PropTypes.string,
};
