import React from "react";
import styles from "./RuleScreenSubtitle.module.css";

interface RuleScreenSubtitleProps {
  children: string;
}

const RuleScreenSubtitle: React.FC<RuleScreenSubtitleProps> = ({ children }) => {
  return <h2 className={styles.wrapper}>{children}</h2>;
};

export default RuleScreenSubtitle;