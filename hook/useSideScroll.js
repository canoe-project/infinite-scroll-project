import { useRef, useEffect, useState } from "react";

const lerp = (v0, v1, t) => {
  return v0 * (1 - t) + v1 * t;
};

export function useSideScroll(callback, listRef) {
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
          callback();
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
