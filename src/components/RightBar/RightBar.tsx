import Activities from "../Activities/Activities";
import Contacts from "../Contacts/Contacts";
import Notifications from "../Notifications/Notifications";
import styles from "./RightBar.module.css";

const RightBar: React.FC = () => {
  return (
    <div className={styles.container}>
      <Notifications />
      <Activities />
      <Contacts />
    </div>
  );
};

export default RightBar;
