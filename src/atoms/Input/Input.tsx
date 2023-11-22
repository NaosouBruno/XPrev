import React from "react";

type InputProps = {
  placeholder?: string;
  value: string;
  valueChange: (value: string) => void;
};

export default function Input(props: InputProps) {
  return (
    <input
      placeholder={props.placeholder}
      value={props.value}
      onChange={(event) => props.valueChange(event.target.value)}
    />
  );
}
