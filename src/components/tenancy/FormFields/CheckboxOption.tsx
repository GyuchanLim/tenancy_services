import type { CheckboxOptionProps } from "./types";

const CheckboxOption = ({
  fieldLabel,
  option,
  checked,
  onChange,
}: CheckboxOptionProps) => {
  const inputId = `${fieldLabel}${option}`;

  return (
    <label htmlFor={inputId}>
      <input
        type="checkbox"
        id={inputId}
        value={option}
        checked={checked}
        onChange={onChange}
      />
      {option}
    </label>
  );
};

export default CheckboxOption;
