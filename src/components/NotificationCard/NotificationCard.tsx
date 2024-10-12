import { formatDistanceToNow } from "date-fns";
import styles from "./NotificationCard.module.css";
import { PiBroadcast, PiBugBeetle, PiUser } from "react-icons/pi";

type Props = {
  title: String;
  time: Date;
  type: String;
  index: number;
};

const NotificationCard: React.FC<Props> = ({ title, time, type, index }) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.icon_pri} ${index % 2 !== 0 && styles.icon_sec}`}>
        {type === "bug" ? (
          <PiBugBeetle className={styles.icon} />
        ) : type === "new" ? (
          <PiUser className={styles.icon} />
        ) : (
          <PiBroadcast className={styles.icon} />
        )}
      </div>
      <div>
        <p className={styles.title}>{title}</p>
        <p className={styles.time}>
          {formatDistanceToNow(new Date(time), { addSuffix: true })}
        </p>
      </div>
    </div>
  );
};

export default NotificationCard;
