import Inputmask from "inputmask";
import PropTypes from "prop-types";
import { useEffect } from "react";
import "./Input.scss";

export default function Input(props) {
  useEffect(() => {
    if (props.mask) {
      Inputmask({
        mask: props.mask,
        placeholder: "",
        showMaskOnFocus: false,
        showMaskOnHover: false,
      }).mask(document.getElementById(`input-${props.name}`));
    }
  }, [props]);

  return (
    <div className="input-container">
      {props.label ? (
        <label className="input-label">
          {props.label}{" "}
          {props.required ? (
            <span className="required-indicator">*</span>
          ) : null}
        </label>
      ) : null}
      {!props.multiline ? (
        <input
          className="input"
          id={`input-${props.name}`}
          placeholder={props.placeholder}
          required={props.required}
          value={props.value}
          onChange={(event) => props.valueChange(event.target.value)}
        />
      ) : (
        <textarea
          className="input text-area"
          id={`input-${props.name}`}
          placeholder={props.placeholder}
          required={props.required}
          rows={props.lines}
          value={props.value}
          onChange={(event) => props.valueChange(event.target.value)}
        ></textarea>
      )}
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  lines: PropTypes.number,
  mask: PropTypes.string,
  multiline: PropTypes.bool,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string,
  valueChange: PropTypes.func,
};
