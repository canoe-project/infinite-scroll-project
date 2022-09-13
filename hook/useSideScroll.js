import { useRef, useEffect, useState } from "react";

export function useSideScroll(listRef, bar) {
  useEffect(() => {
    const el = listRef.current;
    const barEl = bar.current;
    if (el) {
      const onWheel = (e) => {
        if (e.deltaY == 0) return;
        e.preventDefault();
        barEl.innerText = `${parseInt(
          (el.scrollLeft / (el.scrollWidth - el.clientWidth)) * 100
        )}%`;

        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behavior: "auto",
        });
        if (el.scrollLeft / (el.scrollWidth - el.clientWidth) >= 0.98) {
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
  }, [listRef, bar]);
  return listRef;
}
