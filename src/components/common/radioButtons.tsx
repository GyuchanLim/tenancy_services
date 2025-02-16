import React, { useState } from 'react';

interface RadioButtonProps {
  radioButtonOptions?: Array<string>;
  className?: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({ radioButtonOptions = [], className = '' }) => {
  const [selectedValue, setSelectedValue] = useState<string>(radioButtonOptions[0] || ''); // Default value from the first option

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className={`max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 bg-white rounded-lg ${className}`}>
      {radioButtonOptions.map((option, index) => (
        <div key={index}>
          <input
            type="radio"
            id={option}
            name="drone"
            value={option}
            checked={selectedValue === option}
            onChange={handleChange}
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </div>
  );
};

export default RadioButton;
