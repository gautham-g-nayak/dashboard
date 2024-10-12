import React from "react";
import styles from "./SearchComponent.module.css";
import { BiSearch } from "react-icons/bi";

type Props = {
  showTrailing?: boolean;
};

const SearchComponent: React.FC<Props> = ({ showTrailing = true }) => {
  return (
    <div
      className={`${styles.searchContainer} ${!showTrailing && styles.border}`}
      role="search"
    >
      <BiSearch className={styles.trailing} />
      <input className={styles.input} placeholder="Search" />
      {showTrailing && <span className={styles.trailing}>⌘/</span>}
    </div>
  );
};

export default SearchComponent;
