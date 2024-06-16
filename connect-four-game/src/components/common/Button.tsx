import React, { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ type = 'button', onClick, children, className = '', ...props }) => (
  <button
    type={type}
    onClick={onClick}
    className={`${styles.wrapper} ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;