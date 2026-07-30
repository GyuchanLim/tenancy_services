import type { FieldContainerProps } from "./types";

const FieldContainer = ({ label, children }: FieldContainerProps) => {
  return (
    <div>
      <label>{label}:</label>
      {children}
    </div>
  );
};

export default FieldContainer;
