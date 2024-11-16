import React from "react";

const Steps = () => {
  return (
    <div className="flex flex-col items-center space-y-8 p-6 bg-white">
      <Step
        stepNumber="1"
        title="Select a Category"
        description="Choose from options like Electronics, Clothing, etc., to view available products."
        align="left"
      />
      <Divider />
      <Step
        stepNumber="2"
        title="Add Products"
        description="Click '+' to add products to the list, which will then display in the 'Added Products' section."
        align="right"
      />
      <Divider />
      <Step
        stepNumber="3"
        title="View Recommendations"
        description="Hover over each added product to see eco-friendly alternatives with lower footprints, and click '+' to add them."
        align="left"
      />
      <Divider />
      <Step
        stepNumber="4"
        title="Analyze Savings"
        description="Hit 'Submit & Analyze' to view your total footprint, recommendations, and savings in the analysis section."
        align="right"
      />
      <Divider />
      <MessageSection />
    </div>
  );
};

const Step: React.FC<{
  stepNumber: string;
  title: string;
  description: string;
  align: "left" | "right";
}> = ({ stepNumber, title, description, align }) => (
  <div
    className={`text-center ${
      align === "left" ? "text-left" : "text-right"
    } w-full`}
  >
    <h2
      className={`text-xl font-bold ${
        align === "left" ? "ml-0" : "ml-auto w-fit"
      }`}
    >
      Step-{stepNumber}
    </h2>
    <p className="text-gray-600 mt-2 text-left">
      <strong>{title}:</strong> {description}
    </p>
  </div>
);

const Divider = () => <div className="w-3/4 border-t border-gray-300"></div>;

const MessageSection = () => (
  <div className="text-center w-full mt-8">
    <div className="w-full mx-auto border-t-4 border-[#126EBA]"></div>
    <p className="text-green-700 font-semibold text-4xl my-4">
      Track your choices and reduce your impact!
    </p>
    <div className="w-4/5 mx-auto border-t-4 border-[#126EBA]"></div>
  </div>
);

export default Steps;
