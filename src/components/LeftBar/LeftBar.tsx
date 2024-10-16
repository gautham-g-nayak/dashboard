import {
  PiBookOpen,
  PiChartPieSlice,
  PiChatsTeardrop,
  PiFolderDuotone,
  PiIdentificationBadge,
  PiIdentificationCard,
  PiNotebook,
  PiShoppingBagOpen,
  PiUsersThree,
} from "react-icons/pi";
import { IoClose } from "react-icons/io5";
import styles from "./LeftBar.module.css";
import Menu from "../Menu/Menu";
import { Drawer, useMediaQuery } from "@mui/material";
import { useSideBar } from "../../context/SidebarContext";
import IconButton from "../IconButton/IconButton";

const LeftBarContent: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <img src="/user.png" alt="user" />
        <span>ByeWind</span>
      </div>
      <div className={styles.top_section}>
        <span className={styles.top_section_item}>Favorites</span>
        <span className={styles.top_section_item}>Recently</span>
      </div>
      <div className={styles.top_section_items}>
        <li className={styles.top_section_item}>Overview</li>
        <li className={styles.top_section_item}>Projects</li>
      </div>
      <div>
        <span className={styles.sub_title}>Dashboards</span>
        <div className={styles.button}>
          <div className={styles.indicator}></div>
          <PiChartPieSlice className={styles.icon} />
          <span>Default</span>
        </div>
        <Menu
          title="eCommerce"
          icon={<PiShoppingBagOpen className={styles.icon} />}
        />
        <Menu
          title="Projects"
          items={["landing"]}
          icon={<PiFolderDuotone className={styles.icon} />}
        />
        <Menu
          title="Online Courses"
          items={["Application"]}
          icon={<PiBookOpen className={styles.icon} />}
        />
      </div>
      <div>
        <span className={styles.sub_title}>pages</span>
        <Menu
          title="Profile"
          items={[
            "Overview",
            "Projects",
            "Campaigns",
            "Documents",
            "Followers",
          ]}
          icon={<PiIdentificationBadge className={styles.icon} />}
        />
        <Menu
          title="Account"
          items={["Overview", "Statement"]}
          icon={<PiIdentificationCard className={styles.icon} />}
        />
        <Menu
          title="Corporate"
          items={["Overview", "Logs"]}
          icon={<PiUsersThree className={styles.icon} />}
        />
        <Menu
          title="Blog"
          items={["Overview", "Blog"]}
          icon={<PiNotebook className={styles.icon} />}
        />
        <Menu
          title="Social"
          icon={<PiChatsTeardrop className={styles.icon} />}
        />
      </div>
    </div>
  );
};

const LeftBar: React.FC = () => {
  const isSmallScreen = useMediaQuery("(max-width: 1024px)");
  const { showLeftBar, toggleLeftBar } = useSideBar();
  return isSmallScreen ? (
    <Drawer
      open={showLeftBar}
      onClose={toggleLeftBar}
      anchor="left"
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
          onClick={toggleLeftBar}
        />
        <LeftBarContent />
      </>
    </Drawer>
  ) : showLeftBar ? (
    <LeftBarContent />
  ) : (
    <></>
  );
};

export default LeftBar;
