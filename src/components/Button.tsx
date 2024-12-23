import React from 'react';

type ButtonProps = {
  name: string;
  type?: 'button' | 'submit' | 'reset'; 
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  style?: React.CSSProperties; 
};

const Button: React.FC<ButtonProps> = ({
  name,
  type = 'button',
  onClick,
  disabled = false,
  style,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {name}
    </button>
  );
};

export default Button;
