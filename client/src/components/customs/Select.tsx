import React, { FC } from "react";
import { Controller } from "react-hook-form";

interface SelectProps {
  name: string;
  control: any;
  error: any;
  className?: string;
  rules?: any;
  showError?: boolean;
  data: { value: string | number; text: string }[];
}

const Select: FC<SelectProps> = ({
  control,
  error,
  name,
  className = "select select-bordered w-full ",
  rules,
  showError = true,
  data,
}) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <select defaultValue={""} {...field} className={className}>
            {data?.map((item) => (
              <option key={item.value} value={item.value}>
                {item.text}
              </option>
            ))}
          </select>
        )}
      />
      {showError && (
        <p className="py-1 text-primary text-sm">
          {error[name] && error[name].message}
        </p>
      )}
    </>
  );
};

export default Select;
