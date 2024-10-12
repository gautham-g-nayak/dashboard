import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { IoIosArrowForward } from "react-icons/io";
import styles from "./Menu.module.css";

type Props = {
  icon: JSX.Element;
  items?: String[];
  title: String;
};

const Menu = ({ icon, items, title }: Props) => {
  return (
    <Accordion
      elevation={0}
      disableGutters
      sx={{
        background: "var(--background-color)",
        color: "var(--text-primary-color)",
        "&::before": { height: 0, display: "block" },
        transition: "all 0.4s ease",
      }}
    >
      <AccordionSummary
        expandIcon={<IoIosArrowForward className={styles.icon} />}
        aria-controls="panel1-content"
        id="panel1-header"
        sx={{
          transition: "all 0.4s ease",
          flexDirection: "row-reverse",
          ".MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
            transform: "rotate(90deg)",
          },
          background: "var(--background-color)",
          color: "var(--text-primary-color)",
          paddingLeft: 1,
        }}
      >
        <div className={styles.container}>
          {icon}
          <span>{title}</span>
        </div>
      </AccordionSummary>
      <AccordionDetails className={styles.items}>
        {items?.map((item) => (
          <span className={styles.item}>{item}</span>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default Menu;
