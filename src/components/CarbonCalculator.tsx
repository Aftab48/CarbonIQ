import { useState, ChangeEvent } from "react";

interface FormData {
  electricBill: string;
  gasBill: string;
  oilBill: string;
  mileage: string;
  shortFlights: string;
  longFlights: string;
  recycleNewspaper: boolean;
  recycleAluminum: boolean;
}

interface CalculatorProps {
  onCalculate: (co2e: number, pounds: number) => void;
}

const CarbonCalculator: React.FC<CalculatorProps> = ({ onCalculate }) => {
  const initialFormData: FormData = {
    electricBill: "",
    gasBill: "",
    oilBill: "",
    mileage: "",
    shortFlights: "",
    longFlights: "",
    recycleNewspaper: false,
    recycleAluminum: false,
  };

  const [formData, setFormData] = useState<FormData>({
    electricBill: "",
    gasBill: "",
    oilBill: "",
    mileage: "",
    shortFlights: "",
    longFlights: "",
    recycleNewspaper: false,
    recycleAluminum: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const calculateFootprint = () => {
    const electricFootprint = parseFloat(formData.electricBill || "0") * 105;
    const gasFootprint = parseFloat(formData.gasBill || "0") * 105;
    const oilFootprint = parseFloat(formData.oilBill || "0") * 113;
    const carFootprint = parseFloat(formData.mileage || "0") * 0.79;
    const shortFlightFootprint =
      parseFloat(formData.shortFlights || "0") * 1100;
    const longFlightFootprint = parseFloat(formData.longFlights || "0") * 4400;
    const newspaperFootprint = formData.recycleNewspaper ? 0 : 184;
    const aluminumFootprint = formData.recycleAluminum ? 0 : 166;

    const totalFootprintCO2e =
      electricFootprint +
      gasFootprint +
      oilFootprint +
      carFootprint +
      shortFlightFootprint +
      longFlightFootprint +
      newspaperFootprint +
      aluminumFootprint;

    const totalFootprintPounds = totalFootprintCO2e * 2.20462;

    onCalculate(totalFootprintCO2e, totalFootprintPounds);
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">
        Carbon Footprint Calculator
      </h2>
      <div className="space-y-4">
        <input
          type="number"
          name="electricBill"
          placeholder="Monthly Electric Bill (INR)"
          value={formData.electricBill}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="gasBill"
          placeholder="Monthly Gas Bill (INR)"
          value={formData.gasBill}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="oilBill"
          placeholder="Monthly Oil Bill (INR)"
          value={formData.oilBill}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="mileage"
          placeholder="Yearly Car Mileage"
          value={formData.mileage}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="shortFlights"
          placeholder="Number of short flights"
          value={formData.shortFlights}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="longFlights"
          placeholder="Number of long flights"
          value={formData.longFlights}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="recycleNewspaper"
            checked={formData.recycleNewspaper}
            onChange={handleChange}
            className="h-4 w-4"
          />
          <span>Do you recycle newspaper?</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="recycleAluminum"
            checked={formData.recycleAluminum}
            onChange={handleChange}
            className="h-4 w-4"
          />
          <span>Do you recycle aluminum?</span>
        </label>
        <button
          onClick={calculateFootprint}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Calculate
        </button>
        <button
          onClick={resetForm}
          className="w-full bg-gray-500 text-white py-2 rounded hover:bg-gray-600 transition mt-2"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default CarbonCalculator;
