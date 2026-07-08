import FieldContainer from "./FieldContainer";
import InputControl from "./InputControl";
import type { TextFieldProps } from "./types";

const DateField = ({ label, value, onChange }: TextFieldProps) => {
  return (
    <FieldContainer label={label}>
      <InputControl type="month" value={value} onChange={onChange} />
    </FieldContainer>
  );
};

export default DateField;
