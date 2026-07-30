import type { ChangeEvent, ReactNode } from "react";

export type InputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => void;

export type FieldContainerProps = {
  label: string;
  children: ReactNode;
};

export type InputControlProps = {
  type: "text" | "month";
  value: string;
  onChange: InputChangeHandler;
};

export type MultiSelectFieldProps = {
  label: string;
  selectOptions: string[];
  selectedOptions: string[];
  onChange: InputChangeHandler;
};

export type CheckboxOptionProps = {
  fieldLabel: string;
  option: string;
  checked: boolean;
  onChange: InputChangeHandler;
};

export type TextFieldProps = {
  label: string;
  value: string;
  onChange: InputChangeHandler;
};
