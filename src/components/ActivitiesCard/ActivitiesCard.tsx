import { formatDistanceToNow } from "date-fns";
import styles from "./ActivitiesCard.module.css";

type Props = {
  title: String;
  time: Date;
  isLast: boolean;
};

const ActivitiesCard: React.FC<Props> = ({ title, time, isLast = false }) => {
  return (
    <div className={styles.container}>
      <img src={`${process.env.PUBLIC_URL}/user.png`} alt="user" />
      {!isLast && <div className={styles.line}></div>}
      <div>
        <p className={styles.title}>{title}</p>
        <p className={styles.time}>
          {formatDistanceToNow(new Date(time), { addSuffix: true })}
        </p>
      </div>
    </div>
  );
};

export default ActivitiesCard;
