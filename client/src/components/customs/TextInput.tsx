import React, { FC } from "react";
import { Controller } from "react-hook-form";

interface TextInputProps {
  name: string;
  type?: string;
  control: any;
  error: any;
  className?: string;
  placeholder?: string;
  rules?: any;
  showError?: boolean;
  errorTextColor?: string;
}

const TextInput: FC<TextInputProps> = ({
  control,
  error,
  name,
  className = "input input-bordered w-full",
  type = "text",
  placeholder = "Type here",
  rules,
  showError = true,
  errorTextColor = "text-primary",
}) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <input
            {...field}
            type={type}
            className={className}
            placeholder={placeholder}
          />
        )}
      />
      {showError && (
        <p className={`py-1 text-sm ${errorTextColor}`}>
          {error[name] && error[name].message}
        </p>
      )}
    </>
  );
};

export default TextInput;
