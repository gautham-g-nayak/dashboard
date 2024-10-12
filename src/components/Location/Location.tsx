import styles from "./Location.module.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const Location = () => {
  const data = [
    { city: "New York", value: 72, total: 100 - 72 },
    { city: "San Francisco", value: 39, total: 100 - 39 },
    { city: "Sydney", value: 25, total: 100 - 25 },
    { city: "Singapore", value: 61, total: 100 - 61 },
  ];
  return (
    <div className={styles.container}>
      <span className={styles.title}>Revenue by Location</span>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis type="number" hide />
          <YAxis
            dataKey="city"
            type="category"
            axisLine={false}
            tickLine={false}
          />
          <Bar
            dataKey="value"
            stackId="a"
            fill="var(--secondary-cyan)"
            barSize={2}
          />
          <Bar dataKey="total" stackId="a" fill="var(--black-20)" barSize={2} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Location;
