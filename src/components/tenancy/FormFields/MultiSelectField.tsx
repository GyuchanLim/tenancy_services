import CheckboxOption from "./CheckboxOption";
import FieldContainer from "./FieldContainer";
import type { MultiSelectFieldProps } from "./types";

const MultiSelectField = ({
  label,
  selectOptions,
  selectedOptions,
  onChange,
}: MultiSelectFieldProps) => {
  return (
    <FieldContainer label={label}>
      <div>
        {selectOptions.map((item) => (
          <CheckboxOption
            key={item}
            fieldLabel={label}
            option={item}
            checked={selectedOptions.includes(item)}
            onChange={onChange}
          />
        ))}
      </div>
    </FieldContainer>
  );
};

export default MultiSelectField;
