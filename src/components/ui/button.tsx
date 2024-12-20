import React from "react";

import cn from "@/lib/cn";

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        "inline-block px-4 py-2 h-10 text-sm font-medium bg-lime-400 text-black rounded-md",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
