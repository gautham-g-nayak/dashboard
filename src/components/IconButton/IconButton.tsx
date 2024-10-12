import React from "react";
import styles from "./IconButton.module.css";

type Props = {
  icon: JSX.Element;
  onClick: () => void;
  style?: React.CSSProperties;
};

const IconButton: React.FC<Props> = ({ icon, onClick, style }): JSX.Element => {
  return (
    <button onClick={onClick} className={styles.IconButton} style={style}>
      {icon}
    </button>
  );
};

export default IconButton;
