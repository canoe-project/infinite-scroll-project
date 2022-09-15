const ScrollBar = ({ barRef }) => {
  return (
    <div className="flex flex-col w-full py-4 absolute bottom-0">
      <div className="bg-black h-[1px] mb-2" />
      <div className="flex flex-row  w-full justify-between">
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
      <div className="bg-black h-[1px] mt-2" />
    </div>
  );
};

export default ScrollBar;
