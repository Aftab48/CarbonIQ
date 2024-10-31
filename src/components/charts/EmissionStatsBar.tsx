import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Electricity and Heat Production",
    percentage: 42,
  },
  {
    name: "Transportation",
    percentage: 24,
  },
  {
    name: "Industry",
    percentage: 19,
  },
  {
    name: "Agriculture, Forest and Land Use",
    percentage: 15,
  },
];

const EmissionStatsBar = () => {
  return (
    <div className="bg-white rounded-2xl p-4 h-full">
      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={data} layout="vertical" barSize={35}>
          <CartesianGrid
            vertical={true}
            horizontal={false}
            strokeDasharray="3 3"
          />
          <XAxis
            type="number"
            axisLine={true}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            domain={["dataMin", 40]}
            ticks={[5, 10, 15, 20, 25, 30, 35, 40]}
            tickCount={8}
          />
          <YAxis
            type="category"
            dataKey="name"
            axisLine={true}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            width={200}
          />

          <Tooltip
            contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
          />
          <Legend
            align="center"
            verticalAlign="bottom"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
            formatter={() => "% of Global Emissions"}
          />
          <Bar
            dataKey="percentage"
            fill="#088F8F"
            legendType="square"
            radius={[0, 0, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EmissionStatsBar;
