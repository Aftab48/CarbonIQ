const CalculatorResultBox = ({
  pounds,
  co2e,
}: {
  pounds: number;
  co2e: number;
}) => {
  const getFootprintCategory = (pounds: number): string => {
    if (pounds <= 500000) return "Excellent - Minimal Carbon Footprint";
    if (pounds <= 1000000) return "Good - Sustainable Practices Observed";
    if (pounds <= 1500000) return "Average - On Par with Most Households";
    if (pounds <= 2500000) return "High - Consider Reducing Emissions";
    return "Very High - Immediate Action Needed to Reduce Carbon Footprint";
  };

  return (
    <div className="p-4 text-black">
      <div className="mx-2 my-4">
        <h3 className="uppercase font-bold mb-4 text-2xl">
          Your Carbon Footprint
        </h3>
        <p className="text-[#2D2D2D]">CO2e: {co2e} kg</p>
        <p className="text-[#2D2D2D]">Pounds: {pounds} lbs</p>
      </div>
      <div className="mx-2 my-4">
        <h3 className="font-light text-2xl">
          CATEGORY:{" "}
          <span
            className={`
        font-bold 
        ${pounds <= 500000 ? "text-green-600" : ""}
        ${pounds > 500000 && pounds <= 1000000 ? "text-yellow-500" : ""}
        ${pounds > 1000000 && pounds <= 1500000 ? "text-orange-500" : ""}
        ${pounds > 1500000 && pounds <= 2500000 ? "text-red-500" : ""}
        ${pounds > 2500000 ? "text-red-700" : ""}
      `}
          >
            {getFootprintCategory(pounds)}
          </span>
        </h3>
        <p className="text-[#2D2D2D]">
          {pounds <= 500000 &&
            "Excellent work! Your carbon footprint is minimal."}
          {pounds > 500000 &&
            pounds <= 1000000 &&
            "Good job! You're practicing sustainability, but there's room to improve."}
          {pounds > 1000000 &&
            pounds <= 1500000 &&
            "You're on par with most households. Consider small changes to reduce your emissions."}
          {pounds > 1500000 &&
            pounds <= 2500000 &&
            "Your footprint is high. Explore ways to lower energy and travel emissions."}
          {pounds > 2500000 &&
            "Your footprint is very high. Immediate action is necessary to minimize your impact."}
        </p>
      </div>
      <div className="mx-2 my-4">
        <p className="text-[#2D2D2D] drop-shadow-lg italic hover:underline hover:cursor-pointer ">
          See more tips
        </p>
      </div>
    </div>
  );
};

export default CalculatorResultBox;
