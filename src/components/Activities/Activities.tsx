import ActivitiesCard from "../ActivitiesCard/ActivitiesCard";
import styles from "./Activities.module.css";

const Activities = () => {
  const now = new Date();

  const data = [
    {
      title: "You have a bug that needs to be fixed",
      time: now,
    },
    {
      title: "Released a new version",
      time: new Date(now.getTime() - 30 * 60000),
    },
    {
      title: "Modified A data in Page X",
      time: new Date(now.getTime() - 10 * 60 * 60000),
    },
    {
      title: "Deleted a page in Project X",
      time: new Date(now.getTime() - 12 * 60 * 60000),
    },
  ];
  return (
    <div className={styles.container}>
      <span className={styles.subTitle}>Activities</span>
      {data.map((activity, index) => (
        <ActivitiesCard
          time={activity.time}
          title={activity.title}
          isLast={data.length - 1 === index}
        />
      ))}
    </div>
  );
};

export default Activities;
