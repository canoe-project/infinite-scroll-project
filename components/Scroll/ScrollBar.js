import { useEffect, useRef } from "react";
const ScrollBar = ({ barRef }) => {
  useEffect(() => {}, []);
  return (
    <div className="px-[2.6em]">
      <div className=" flex border-y-[1px] border-y-[#1c1c21] w-full py-4 ">
        <div className="flex flex-row  w-full justify-between">
          <div>
            <p>{`(0%`}</p>
          </div>
          <div>
            <p className="text-red-600" ref={barRef}>
              0%
            </p>
          </div>
          <div>
            <p>{`100%)`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollBar;
