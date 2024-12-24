import React from "react";

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  className,
  ...props
}) => {
  return (
    <input
      className={
        "w-full px-3 py-2 text-sm font-medium h-10 border bg-transparent active:border-black rounded-md placeholder:font-normal"
      }
      {...props}
    />
  );
};

export default Input;
