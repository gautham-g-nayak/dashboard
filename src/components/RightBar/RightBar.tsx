import { Drawer, useMediaQuery } from "@mui/material";
import Activities from "../Activities/Activities";
import Contacts from "../Contacts/Contacts";
import Notifications from "../Notifications/Notifications";
import styles from "./RightBar.module.css";
import { useSideBar } from "../../context/SidebarContext";
import IconButton from "../IconButton/IconButton";
import { IoClose } from "react-icons/io5";

const RightBarContent: React.FC = () => {
  return (
    <div className={styles.container}>
      <Notifications />
      <Activities />
      <Contacts />
    </div>
  );
};

const RightBar: React.FC = () => {
  const isSmallScreen = useMediaQuery("(max-width: 1024px)");
  const { showRightBar, toggleRightBar } = useSideBar();
  return isSmallScreen ? (
    <Drawer
      open={showRightBar}
      onClose={toggleRightBar}
      anchor="right"
      PaperProps={{
        style: {
          backgroundColor: "var(--background-color)",
          color: "var(--text-primary-color)",
        },
      }}
    >
      <>
        <IconButton
          className={styles.closeButton}
          icon={<IoClose className={styles.closeButtonIcon} />}
          onClick={toggleRightBar}
        />
        <RightBarContent />
      </>
    </Drawer>
  ) : showRightBar ? (
    <RightBarContent />
  ) : (
    <></>
  );
};

export default RightBar;
