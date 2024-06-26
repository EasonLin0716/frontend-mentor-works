import React, { ButtonHTMLAttributes } from 'react';
import SmallButton from '../common/SmallButton';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    openMenu: () => void;
}

const MenuButton: React.FC<ButtonProps> = ({ openMenu }) => {
    return <SmallButton onClick={openMenu}>menu</SmallButton>;
};

export default MenuButton;
