import { ButtonHTMLAttributes } from 'react';
import * as S from './Button.styles';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'lg' | 'md' | 'sm';
  children: React.ReactNode;
  color?: 'primary' | 'success' | 'secondary' | 'warning' | 'error';
  shadow?: boolean;
}

const Button = ({
  size = 'md',
  color = 'primary',
  children,
  shadow = false,
  ...options
}: Props) => {
  return (
    <S.Container size={size} color={color} shadow={shadow} {...options}>
      {children}
    </S.Container>
  );
};

export default Button;
