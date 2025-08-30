type MultiSelectFieldProps = {
  label: string;
  selectOptions: string[];
  selectedOptions: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const MultiSelectField = ({
  label,
  selectOptions,
  selectedOptions,
  onChange,
}: MultiSelectFieldProps) => {
  return (
    <div>
      <label>{label}:</label>
      <div>
        {selectOptions.map((item) => (
          <label key={item} htmlFor={`{item}`}>
            <input
              type="checkbox"
              id={`${label}${item}`}
              value={item}
              checked={selectedOptions.includes(item)}
              onChange={onChange}
            />
            {item}
          </label>
        ))}
      </div>
    </div>
  );
};

export const InputField = ({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div>
      <label>{label}:</label>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

export const DateField = ({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div>
      <label>{label}:</label>
      <input type="month" value={value} onChange={onChange} />
    </div>
  );
};
