import { useNavigate } from "react-router-dom";
import styles from "./Default.module.css";
import { FaArrowTrendUp } from "react-icons/fa6";
import Projections from "../../components/Projections/Projections";
import Revenue from "../../components/Revenue/Revenue";
import Location from "../../components/Location/Location";
import Sales from "../../components/Sales/Sales";
import Products from "../../components/Products/Products";

const Default = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.page}>
      <p className={styles.title}>eCommerce</p>
      <div className={styles.conatiner}>
        <div className={styles.grid}>
          <div className={styles.gridItem}>
            <span className={styles.gridItemTitle}>Customers</span>
            <div className={styles.gridItemBox}>
              <span className={styles.gridItemVal}>3,752</span>
              <span className={styles.nowrap}>
                +11.01%{"  "}
                <FaArrowTrendUp />
              </span>
            </div>
          </div>
          <div
            className={`${styles.gridItem} ${styles.light}`}
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/orderlist")}
          >
            <span className={styles.gridItemTitle}>Orders</span>
            <div className={styles.gridItemBox}>
              <span className={styles.gridItemVal}>1,252</span>
              <span className={styles.nowrap}>
                +0.01%{"  "}
                <FaArrowTrendUp />
              </span>
            </div>
          </div>
          <div className={`${styles.gridItem} ${styles.light}`}>
            <span className={styles.gridItemTitle}>Revenue</span>
            <div className={styles.gridItemBox}>
              <span className={styles.gridItemVal}>$752</span>
              <span className={styles.nowrap}>
                +15.05%{"  "}
                <FaArrowTrendUp />
              </span>
            </div>
          </div>
          <div className={`${styles.gridItem} ${styles.purple}`}>
            <span className={styles.gridItemTitle}>Growth</span>
            <div className={styles.gridItemBox}>
              <span className={styles.gridItemVal}>30.0%</span>
              <span className={styles.nowrap}>
                +7.51%{"  "}
                <FaArrowTrendUp />
              </span>
            </div>
          </div>
        </div>
        <Projections />
      </div>
      <div className={styles.conatiner}>
        <Revenue />
        <Location />
      </div>
      <div className={styles.conatiner}>
        <Products />
        <Sales />
      </div>
    </div>
  );
};

export default Default;
