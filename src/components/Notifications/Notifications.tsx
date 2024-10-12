import styles from "./Notifications.module.css";
import NotificationCard from "../NotificationCard/NotificationCard";

const Notifications = () => {
  const now = new Date();

  const data = [
    {
      title: "You have a bug that needs to be fixed",
      time: now,
      type: "bug",
    },
    {
      title: "New user registered",
      time: new Date(now.getTime() - 30 * 60000),
      type: "new",
    },
    {
      title: "You have a bug that needs to be fixed",
      time: new Date(now.getTime() - 10 * 60 * 60000),
      type: "bug",
    },
    {
      title: "Andi Lane subscribed to you",
      time: new Date(now.getTime() - 12 * 60 * 60000),
      type: "subscribed",
    },
  ];
  return (
    <div className={styles.container}>
      <span className={styles.subTitle}>Notifications</span>
      {data.map((notification, index) => (
        <NotificationCard
          index={index}
          time={notification.time}
          type={notification.type}
          title={notification.title}
        />
      ))}
    </div>
  );
};

export default Notifications;
