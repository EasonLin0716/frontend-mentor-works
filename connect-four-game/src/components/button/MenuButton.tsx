import React, { ButtonHTMLAttributes } from 'react';
import SmallButton from '../common/SmallButton';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
  }


const MenuButton: React.FC<ButtonProps> = () => {
    return (
        <SmallButton>menu</SmallButton>
    );
}

export default MenuButton;