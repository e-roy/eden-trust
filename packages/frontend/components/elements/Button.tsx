import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  radius?: "default" | "rounded" | "pill";
  size?: "lg" | "md" | "sm";
  className?: string;
  // eslint-disable-next-line no-unused-vars
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  radius = "default",
  size = "lg",
  className,
  onClick,
}: ButtonProps) => {
  const btnCls = clsx(
    className,
    {
      "text-xs px-2": size === "sm",
      "px-6": size === "lg",
    },
    "py-1 font-Inter text-darkGreen flex font-medium border shadow-md hover:shadow-sm",
    {
      "rounded-full": radius === "pill",
      "rounded-lg": radius === "rounded",
      "rounded-md": radius === "default",
    }
  );

  return (
    <button className={btnCls} onClick={onClick}>
      {children}
    </button>
  );
};
