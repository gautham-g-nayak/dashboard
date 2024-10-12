import ContactCard from "../ContactCard/ContactCard";
import styles from "./Contacts.module.css";

const Contacts = () => {
  const data = [
    {
      title: "Natali Craig",
    },
    {
      title: "Drew Cano",
    },
    {
      title: "Orlando Diggs",
    },
    {
      title: "Andi Lane",
    },
  ];
  return (
    <div className={styles.container}>
      <span className={styles.subTitle}>Contacts</span>
      {data.map((contact) => (
        <ContactCard title={contact.title} />
      ))}
    </div>
  );
};

export default Contacts;
