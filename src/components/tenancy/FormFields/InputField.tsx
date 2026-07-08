import FieldContainer from "./FieldContainer";
import InputControl from "./InputControl";
import type { TextFieldProps } from "./types";

const InputField = ({ label, value, onChange }: TextFieldProps) => {
  return (
    <FieldContainer label={label}>
      <InputControl type="text" value={value} onChange={onChange} />
    </FieldContainer>
  );
};

export default InputField;
