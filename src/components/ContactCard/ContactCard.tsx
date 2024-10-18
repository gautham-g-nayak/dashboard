import styles from "./ContactCard.module.css";

type Props = {
  title: String;
};

const ContactCard: React.FC<Props> = ({ title }) => {
  return (
    <div className={styles.container}>
      <img src={`${process.env.PUBLIC_URL}/user.png`} alt="user" />
      <div>
        <p className={styles.title}>{title}</p>
      </div>
    </div>
  );
};

export default ContactCard;
