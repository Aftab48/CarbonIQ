const Forest = () => {
  return (
    <div
      className="relative bg-cover bg-center text-white p-10 md:p-16 lg:p-24"
      style={{
        backgroundImage: "url('/images/forest.png')",
      }}
    >
      <div className="p-6 rounded-md max-w-4xl">
        <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl">
          <span className="text-white">WHY </span>
          <span className="inline-block">
            <img src="/svg/CarbonIQ.svg" className="h-12 pr-4" />
          </span>
          <span className="text-white">?</span>
        </h2>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl">
          We know that every small action counts, and CarbonIQ is here to guide
          you every step of the way. From cutting emissions to earning rewards,
          you’ll be part of a global movement toward a healthier, more
          sustainable planet. Join us in making everyday actions matter, and
          together, let's create a future where every footprint leaves a
          positive mark.
        </p>
      </div>
    </div>
  );
};

export default Forest;
