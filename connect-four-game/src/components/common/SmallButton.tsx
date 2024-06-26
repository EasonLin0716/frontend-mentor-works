import React, { ButtonHTMLAttributes } from 'react';
import styles from './SmallButton.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}

const SmallButton: React.FC<ButtonProps> = ({
    type = 'button',
    onClick,
    children,
    className = '',
    ...props
}) => (
    <button
        type={type}
        onClick={onClick}
        className={`${styles.wrapper} ${className}`}
        {...props}
    >
        {children}
    </button>
);

export default SmallButton;
