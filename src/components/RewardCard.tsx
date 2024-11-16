import React from "react";

interface RewardCardProps {
  imageSrc: string;
  title: string;
  eligibility: string;
  offer: string;
  validTill: string;
  link: string;
}

const RewardCard: React.FC<RewardCardProps> = ({
  imageSrc,
  title,
  eligibility,
  offer,
  validTill,
  link,
}) => {
  return (
    <div className="bg-[#EBEBEB] rounded-lg shadow-lg p-10 w-full max-w-sm border border-gray-300">
      <div className="flex items-center justify-center">
        {/* Image */}
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-40 object-contain mb-4"
        />
      </div>
      {/* Title */}
      <h3 className="text-lg font-bold text-gray-800 mb-4 text-left">
        {title}
      </h3>
      {/* Details */}
      <ul className="text-sm text-gray-600 mb-4 space-y-2 list-disc list-inside">
        <li>{eligibility}</li>
        <li>{offer}</li>
        <li>{validTill}</li>
      </ul>
      {/* Link */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 text-sm font-medium hover:underline"
      >
        Click Here To Avail Gift Card
      </a>
    </div>
  );
};

export default RewardCard;
