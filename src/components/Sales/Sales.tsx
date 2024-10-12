import styles from "./Sales.module.css";
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from "recharts";

const Sales = () => {
  const data = [
    { name: "Direct", value: 400 },
    { name: "Affilliate", value: 700 },
    { name: "Sponsored", value: 200 },
    { name: "E-mail", value: 1000 },
  ];

  const COLORS = ["var(--brand-color)", "#BAEDBD", "#95A4FC", "#B1E3FF"];

  return (
    <div className={styles.container}>
      <span className={styles.title}>Total Sales</span>
      <ResponsiveContainer width="100%" height={150}>
        <PieChart>
          <Tooltip />
          <Pie
            data={data}
            dataKey="value"
            outerRadius={55}
            innerRadius={30}
            fill="#8884d8"
            paddingAngle={8}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      {data.map((entry, index) => (
        <div key={index} className={styles.legend} style={{paddingBottom: 'var(--s)'}}>
          <div className={styles.legend}>
            <div className={styles.dot} style={{background: `${COLORS[index % COLORS.length]}`}}></div> <span>{entry.name}</span>
          </div>
          <span className={styles.value}>${entry.value}</span>
        </div>
      ))}
    </div>
  );
};

export default Sales;
