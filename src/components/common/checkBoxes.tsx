import React, { useState } from 'react';

interface CheckBoxProps {
  radioButtonOptions?: Array<string>;
  className?: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({ radioButtonOptions = [], className = '' }) => {
  // State to keep track of selected values (as an array)
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (event.target.checked) {
      // Add to the selected values if checked
      setSelectedValues([...selectedValues, value]);
    } else {
      // Remove from the selected values if unchecked
      setSelectedValues(selectedValues.filter((item) => item !== value));
    }
  };

  return (
    <div className={`max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 bg-white rounded-lg ${className}`}>
      {radioButtonOptions.map((option, index) => (
        <div key={index}>
          <input
            type="checkbox"
            id={option}
            name="drone"
            value={option}
            checked={selectedValues.includes(option)} // Check if the value is in the selectedValues array
            onChange={handleChange}
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </div>
  );
};

export default CheckBox;
