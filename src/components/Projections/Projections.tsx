import styles from "./Projections.module.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const Projections = () => {
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
      <span className={styles.title}>Projections vs Actuals</span>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
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
          <Bar dataKey="pv" stackId="a" fill="#A8C5DA" />
          <Bar
            dataKey="uv"
            stackId="a"
            fill="#A8C5DA80"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Projections;
