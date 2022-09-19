const ScrollBar = ({ barRef }) => {
  return (
    <div className="absolute bottom-0 flex flex-col w-full py-4">
      <div className="bg-[#C2A38E] h-[0.18em] mb-2" />
      <div className="flex flex-row justify-between w-full">
        <div>
          <p>{`0%`}</p>
        </div>
        <div>
          <p className="text-red-600" ref={barRef}>
            0%
          </p>
        </div>
        <div>
          <p>{`100%`}</p>
        </div>
      </div>
      <div className="bg-[#C2A38E] h-[0.18em] mt-2" />
    </div>
  );
};

export default ScrollBar;
