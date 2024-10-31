import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";

const data = [
  { year: "2016", value: 35 },
  { year: "2017", value: 36 },
  { year: "2018", value: 37 },
  { year: "2019", value: 36 },
  { year: "2020", value: 33 },
  { year: "2021", value: 34 },
  { year: "2022", value: 35 },
  { year: "2023", value: 36 },
];

const EmissionStatsArea = () => {
  return (
    <div className="bg-white rounded-2xl p-4 h-full">
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={data}>
          <CartesianGrid
            vertical={true}
            horizontal={true}
            strokeDasharray="5 5"
          />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip
            contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
          />

          <Legend
            align="center"
            layout="vertical"
            verticalAlign="bottom"
            wrapperStyle={{ padding: "20px 0" }}
            formatter={() => "CO2 Emissions in billion metric tons"}
          />

          <Area
            type="monotoneX"
            dataKey="value"
            stroke="#088F8F"
            legendType="square"
            fill="rgba(136, 203, 156, 0.3)"
            dot={true}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EmissionStatsArea;
