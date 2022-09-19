import { useRef, useEffect, useState } from "react";

export function useSideScroll(listRef, handle) {
  useEffect(() => {
    const el = listRef.current;

    if (el !== undefined) {
      const onWheel = (e) => {
        if (e.deltaY == 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behavior: "auto",
        });
        if (el.scrollLeft / (el.scrollWidth - el.clientWidth) >= 1) {
          handle();
        } else if (el.scrollLeft / (el.scrollWidth - el.clientWidth) <= 0) {
          el.scrollTo({
            left: el.scrollWidth,
          });
        }
      };
      el.addEventListener("wheel", (e) => {
        onWheel(e);
      });
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, [listRef, handle]);
}
