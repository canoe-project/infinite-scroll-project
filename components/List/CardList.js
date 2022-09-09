import { Fragment, useState, useEffect, useRef, useCallback } from "react";
import { useSideScroll } from "../../hook/useSideScroll";
import { useRotateScroll } from "../../hook/useRotateScroll";

const List = ({ children }) => {
  const listRef = useRef();

  useSideScroll(listRef);
  useRotateScroll(listRef);

  return (
    <Fragment>
      <div
        className={`flex space-x-8 overflow-x-auto scrollbar-hide min-h-[29.17em] transition duration-500 ease-out flex-auto`}
        ref={listRef}
        onWheelCapture={() => {
          setInterval(() => {
            listRef.current.style.transform = `rotate(0deg)`;
          }, 1000);
        }}
      >
        {children}
      </div>
    </Fragment>
  );
};

export default List;
