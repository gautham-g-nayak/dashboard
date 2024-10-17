import React from "react";
import styles from "./IconButton.module.css";

type Props = {
  icon: JSX.Element;
  onClick: () => void;
  className?: string;
};

const IconButton: React.FC<Props> = ({ icon, onClick, className }): JSX.Element => {
  return (
    <button onClick={onClick} className={`${styles.IconButton} ${className}`}>
      {icon}
    </button>
  );
};

export default IconButton;
