import React from "react";

interface BaseInputProps {
  label: string;
  id: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BaseInput: React.FC<BaseInputProps> = ({
  label,
  id,
  onChange,
  ...props
}) => {
  return (
    <div className="grid  w-64 mx-auto">
      <label htmlFor={id} className="mb-2 text-left text-gray-700 font-medium">
        {label}:
      </label>
      <input
        className="w-64 h-8 px-4 py-2 drop-shadow-md shadow-gray-600 rounded-sm outline-none"
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default BaseInput;
