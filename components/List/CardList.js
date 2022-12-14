import { Fragment, useState, useEffect, useRef, cloneElement } from "react";
import { useSideScroll } from "../../hook/useSideScroll";
import { useRotateScroll } from "../../hook/useRotateScroll";
import { useScrollBar } from "hook/useScrollBar";

const List = ({ children, bar, barRef, handle, listRef }) => {
  useSideScroll(listRef, handle);
  useRotateScroll(listRef);
  useScrollBar(listRef, barRef);

  return (
    <div className="relative mt-auto">
      <div
        className={`flex overflow-x-auto scrollbar-hide min-h-[30em] transition duration-500 ease-out z-10 relative `}
        ref={listRef}
        onWheelCapture={() => {
          setInterval(() => {
            listRef.current.style.transform = `rotate(0deg)`;
          }, 1000);
        }}
      >
        {children}
      </div>
      {cloneElement(bar)}
    </div>
  );
};

export default List;
