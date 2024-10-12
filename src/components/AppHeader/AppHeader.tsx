import IconButton from "../IconButton/IconButton";
import styles from "./AppHeader.module.css";
import { useTheme } from "../../context/ThemeContext";
import SearchComponent from "../SearchComponent/SearchComponent";
import {
  PiBell,
  PiClockCounterClockwise,
  PiSidebar,
  PiStar,
  PiSun,
} from "react-icons/pi";
import { useSideBar } from "../../context/SidebarContext";

const AppHeader: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { toggleLeftBar, toggleRightBar } = useSideBar();

  return (
    <header className={styles.header}>
      <div className={styles.group}>
        <IconButton
          icon={<PiSidebar className={styles.icon} />}
          onClick={toggleLeftBar}
        />
        <IconButton
          icon={<PiStar className={styles.icon} />}
          onClick={() => {}}
        />
        <span className={`${styles.title} ${styles.text}`}>Dashboards</span>
        <span className={styles.slash}>/</span>
        <span className={styles.text}>Default</span>
      </div>
      <div className={styles.group}>
        <SearchComponent />
        <IconButton
          icon={
            <PiSun
              className={`${styles.icon} ${
                theme === "light" ? styles.rotateRight : styles.rotateLeft
              }`}
            />
          }
          onClick={toggleTheme}
        />
        <IconButton
          icon={<PiClockCounterClockwise className={styles.icon} />}
          onClick={() => {}}
        />
        <IconButton
          icon={<PiBell className={styles.icon} />}
          onClick={() => {}}
        />
        <IconButton
          icon={<PiSidebar className={styles.icon} />}
          onClick={toggleRightBar}
        />
      </div>
    </header>
  );
};

export default AppHeader;
