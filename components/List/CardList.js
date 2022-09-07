import { Fragment, useState, useEffect, useRef, useCallback } from "react";
import { useSideScroll } from "../../hook/useSideScroll";
import { useRotateScroll } from "../../hook/useRotateScroll";

const List = ({ children, callback }) => {
  const listRef = useRef();

  useSideScroll(callback, listRef);
  useRotateScroll(listRef);

  return (
    <Fragment>
      <div
        className={`flex space-x-8 overflow-x-auto scrollbar-hide min-h-[29.17em] transition duration-150 ease-out`}
        ref={listRef}
        onWheelCapture={() => {
          setInterval(() => {
            listRef.current.style.transform = `rotate(0deg)`;
          }, 500);
        }}
      >
        {children}
      </div>
    </Fragment>
  );
};

export default List;
