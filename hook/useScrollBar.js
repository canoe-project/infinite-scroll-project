import { useRef, useEffect, useState } from "react";

export function useScrollBar(listRef, bar) {
  useEffect(() => {
    const el = listRef.current;
    const barEl = bar.current;

    if (el !== undefined && barEl !== undefined) {
      const onWheel = (e) => {
        if (e.deltaY == 0) return;
        e.preventDefault();
        barEl.innerText = `${parseInt(
          (el.scrollLeft / (el.scrollWidth - el.clientWidth)) * 100
        )}%`;
      };
      el.addEventListener("wheel", (e) => {
        onWheel(e);
      });
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, [listRef, bar]);
  return useScrollBar;
}
