import React from "react";
import RewardCard from "@/components/RewardCard";

const Rewards: React.FC = () => {
  const rewardCards = [
    {
      imageSrc: "/images/amazon.png",
      title: "Amazon Pay Gift Card",
      eligibility: "Eligibility: Save 500 kg of CO₂ or reduce footprint by 20%",
      offer: "Offer: ₹500 gift card for Amazon purchases",
      validTill: "Valid Till: 31 Dec 2024",
      link: "https://www.amazon.in/gift-card",
    },
    {
      imageSrc: "/images/flipkart.png",
      title: "Flipkart Gift Card",
      eligibility: "Eligibility: Save 400 Kg Of CO₂ Or Reduce Footprint By 15%",
      offer: "Offer: ₹400 Gift Card For Flipkart Purchases",
      validTill: "Valid Till: 30 Nov 2024",
      link: "https://www.flipkart.com/gift-card",
    },
    {
      imageSrc: "/images/blinkit.png",
      title: "Blinkit Gift Card",
      eligibility: "Eligibility: Save 300 Kg Of CO₂ Or Reduce Footprint By 10%",
      offer: "Offer: ₹300 Gift Card For Starbucks",
      validTill: "Valid Till: 31 Jan 2025",
      link: "https://www.starbucks.in/gift-card",
    },
    {
      imageSrc: "/images/amazon.png",
      title: "Amazon Gift Card",
      eligibility: "Eligibility: Save 700 Kg Of CO₂ Or Reduce Footprint By 25%",
      offer: "Offer: ₹700 Gift Card For Starbucks",
      validTill: "Valid Till: 31 Jan 2025",
      link: "https://www.starbucks.in/gift-card",
    },
    {
      imageSrc: "/images/myntra.png",
      title: "Myntra Gift Card",
      eligibility: "Eligibility: Save 500 kg of CO₂ or reduce footprint by 30%",
      offer: "Offer: 10% discount on Myntra orders",
      validTill: "Valid Till: 31 Dec 2024",
      link: "https://www.starbucks.in/gift-card",
    },
    {
      imageSrc: "/images/flipkart.png",
      title: "Flipkart Gift Card",
      eligibility: "Eligibility: Save 300 kg of CO₂ or reduce footprint by 15%",
      offer: "Offer: ₹300 gift card for Flipkart purchases",
      validTill: "Valid Till: 31 Jan 2025",
      link: "https://www.starbucks.in/gift-card",
    },
  ];

  return (
    <div className="bg-[#082F4F]">
      <h2 className="text-white text-4xl pl-10 pt-3 font-bold mb-4">
        Earn Rewards for Every Eco-Friendly Choice!
      </h2>
      <hr className="w-2/3 border border-y-4 border-[#3DC19E]" />
      <p className="text-white pl-10 pt-10 text-lg">
        Reduce your carbon footprint to unlock gift vouchers, coupon codes, and
        exclusive offers from our sustainable brand partners.
      </p>
      <h3 className="text-[#3DC19E] pl-10 py-10 text-2xl font-semibold">
        Available Vouchers :
      </h3>
      <div className="flex flex-wrap justify-center gap-6  p-6">
        {rewardCards.map((reward, index) => (
          <RewardCard
            key={index}
            imageSrc={reward.imageSrc}
            title={reward.title}
            eligibility={reward.eligibility}
            offer={reward.offer}
            validTill={reward.validTill}
            link={reward.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Rewards;
