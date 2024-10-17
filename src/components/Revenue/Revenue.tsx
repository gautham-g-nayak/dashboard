import styles from "./Revenue.module.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const Revenue = () => {
  const data = [
    {
      name: "Jan",
      uv: 20,
      pv: 30,
    },
    {
      name: "Feb",
      uv: 10,
      pv: 25,
    },
    {
      name: "Mar",
      uv: 15,
      pv: 20,
    },
    {
      name: "Apr",
      uv: 27,
      pv: 39,
    },
    {
      name: "May",
      uv: 18,
      pv: 48,
    },
    {
      name: "Jun",
      uv: 23,
      pv: 38,
    },
  ];

  const formatYAxisTick = (value: any) => {
    return `${value}M`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.title_container}>
        <span className={styles.title}>Revenue</span>
        <div className={styles.line}></div>
        <div className={styles.legend}>
          <div className={styles.dot}></div> <span>Current Week</span>
          <span className={styles.value}>$58,211</span>
        </div>
        <div className={styles.legend}>
          <div className={`${styles.dot} ${styles.dot_secondary}`}></div>{" "}
          <span>Previous Week</span>
          <span className={styles.value}>$68,768</span>
        </div>
      </div>
      <ResponsiveContainer
        width="100%"
        height="100%"
        maxHeight={205}
        minHeight="205px"
      >
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" tick={{ fill: "var(--black-40)" }} />
          <YAxis
            tickFormatter={formatYAxisTick}
            tick={{ fill: "var(--black-40)" }}
          />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="var(--brand-color)"
            strokeWidth={3}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="uv"
            stroke="var(--secondary-cyan)"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Revenue;
