import React from "react";
import styles from "./PutButton.module.css";

interface PutButtonProps {
    onClick: () => void;
}

const PutButton: React.FC<PutButtonProps> = ({ onClick }) => {
    return <button className={styles.wrapper} onClick={onClick}>Put</button>;
};

export default PutButton;