import { ButtonHTMLAttributes } from "react";
import * as S from "./Button.styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "lg" | "md" | "sm";
  children: React.ReactNode;
  color?: "primary" | "success" | "secondary" | "warning" | "error";
}

const Button = ({
  size = "md",
  color = "primary",
  children,
  ...options
}: Props) => {
  return (
    <S.Container size={size} color={color} {...options}>
      {children}
    </S.Container>
  );
};

export default Button;
