import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Hydropower", count: 38, fill: "#FAE27C" },
  { name: "Wind Power", count: 27, fill: "#C3EBFA" },
  { name: "Solar Power", count: 28, fill: "#AA4A44" },
  { name: "Bio-energy", count: 6, fill: "#C3EBFA" },
  { name: "Geothermal & Others", count: 1, fill: "#AA4A44" },
];

const formatTooltip = (value: number): string => {
  const total = data.reduce((acc, curr) => acc + curr.count, 0);
  const percent = (value / total) * 100;
  return `(${percent.toFixed(0)}%)`;
};

const formatLegend = (value: string): string => {
  const total = data.reduce((acc, curr) => acc + curr.count, 0);
  const item = data.find((d) => d.name === value);
  const percent = item ? (item.count / total) * 100 : 0;
  return `${value} (${percent.toFixed(0)}%)`;
};

const EmissionStatsPie = () => {
  return (
    <div className="bg-white rounded-2xl p-4 h-96 overflow-visible">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            dataKey="count"
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
          />
          <Tooltip
            formatter={formatTooltip}
            contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
          />
          <Legend
            align="center"
            verticalAlign="bottom"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "0px" }}
            formatter={formatLegend}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EmissionStatsPie;
