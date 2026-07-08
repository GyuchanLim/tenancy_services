import type { InputControlProps } from "./types";

const InputControl = ({ type, value, onChange }: InputControlProps) => {
  return <input type={type} value={value} onChange={onChange} />;
};

export default InputControl;
