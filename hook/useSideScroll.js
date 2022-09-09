import { useRef, useEffect, useState } from "react";

export function useSideScroll(listRef) {
  useEffect(() => {
    const el = listRef.current;
    if (el) {
      const onWheel = (e) => {
        if (e.deltaY == 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behavior: "auto",
        });
        if (el.scrollLeft / (el.scrollWidth - el.clientWidth) >= 1) {
          el.scrollTo({
            left: 0,
          });
        } else if (el.scrollLeft / (el.scrollWidth - el.clientWidth) <= 0) {
          el.scrollTo({
            left: el.scrollWidth - el.clientWidth,
          });
        }
      };

      el.addEventListener("wheel", (e) => {
        onWheel(e);
      });
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, [listRef]);
  return listRef;
}
