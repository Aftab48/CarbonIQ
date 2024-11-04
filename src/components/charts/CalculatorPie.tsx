import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

interface FormData {
  electricBill: number;
  gasBill: number;
  oilBill: number;
  carMileage: number;
  shortFlights: number;
  longFlights: number;
  recycleNewspapers: boolean;
  recycleAluminums: boolean;
}

interface CalculatorPieComponentProps {
  data: FormData;
}

const CalculatorPie: React.FC<CalculatorPieComponentProps> = ({ data }) => {
  const chartData = [
    { name: "Electric Bill", value: data.electricBill, fill: "#FAE27C" },
    { name: "Gas Bill", value: data.gasBill, fill: "#C3EBFA" },
    { name: "Oil Bill", value: data.oilBill, fill: "#AA4A44" },
    { name: "Car Mileage", value: data.carMileage, fill: "#FAE27C" },
    { name: "Short Flights", value: data.shortFlights, fill: "#C3EBFA" },
    { name: "Long Flights", value: data.longFlights, fill: "#AA4A44" },
  ];

  return (
    <div className="rounded-2xl bg-blue-400/50 p-4 m-2 h-96 overflow-visible">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            dataKey="count"
            data={chartData}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
          />
          <Tooltip
            //formatter={formatTooltip}
            contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
          />
          <Legend
            align="center"
            verticalAlign="bottom"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "0px" }}
            //formatter={formatLegend}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CalculatorPie;
