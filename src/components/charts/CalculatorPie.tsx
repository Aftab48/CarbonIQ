import { Breakdown } from "@/sections/Calculator";
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

interface CalculatorPieComponentProps {
  data: Breakdown;
}

const CalculatorPie: React.FC<CalculatorPieComponentProps> = ({ data }) => {
  // Default data for when no data is available
  const chartData = data
    ? [
        {
          name: "Electric Footprint",
          value: data.electricFootprint || 0,
          fill: "#FAE27C",
        },
        {
          name: "Gas Footprint",
          value: data.gasFootprint || 0,
          fill: "#C3EBFA",
        },
        {
          name: "Oil Footprint",
          value: data.oilFootprint || 0,
          fill: "#AA4A44",
        },
        {
          name: "Car Footprint",
          value: data.carFootprint || 0,
          fill: "#FAE27C",
        },
        {
          name: "Short Flights",
          value: data.shortFlightFootprint || 0,
          fill: "#C3EBFA",
        },
        {
          name: "Long Flights",
          value: data.longFlightFootprint || 0,
          fill: "#AA4A44",
        },
        {
          name: "Newspaper Footprint",
          value: data.newspaperFootprint || 0,
          fill: "#FFD700",
        },
        {
          name: "Aluminum Footprint",
          value: data.aluminumFootprint || 0,
          fill: "#FF6347",
        },
      ]
    : [];

  // If no data is available, render a blank chart with zero values
  if (chartData.every((item) => item.value === 0)) {
    return (
      <div className="rounded-2xl bg-blue-400/50 p-4 m-2 h-96 overflow-visible flex justify-center items-center">
        <p>No data available for the chart</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-blue-400/50 p-4 m-2 h-96 overflow-visible">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            dataKey="value" // Updated to match the `value` field in `chartData`
            data={chartData}
            cx="50%"
            cy="50%"
            outerRadius={80}
            label
          />
          <Tooltip
            contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
          />
          <Legend
            align="center"
            verticalAlign="bottom"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "0px" }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CalculatorPie;
