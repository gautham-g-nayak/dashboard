import IconButton from "../../components/IconButton/IconButton";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import styles from "./OrderList.module.css";
import { IoAdd, IoFilter } from "react-icons/io5";
import { PiArrowsDownUp } from "react-icons/pi";
import OrderTable from "../../components/OrderTable/OrderTable";
import { useEffect } from "react";
import { useSideBar } from "../../context/SidebarContext";

const OrderList = () => {
  const { setToRightBar } = useSideBar();

  useEffect(() => {
    setToRightBar(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.page}>
      <p className={styles.title}>Order List</p>
      <div className={styles.action}>
        <div className={styles.group}>
          <IconButton
            icon={<IoAdd className={styles.icon} />}
            onClick={() => {}}
          />
          <IconButton
            icon={<IoFilter className={styles.icon} />}
            onClick={() => {}}
          />
          <IconButton
            icon={<PiArrowsDownUp className={styles.icon} />}
            onClick={() => {}}
          />
        </div>
        <SearchComponent showTrailing={false} />
      </div>
      <OrderTable />
    </div>
  );
};

export default OrderList;
