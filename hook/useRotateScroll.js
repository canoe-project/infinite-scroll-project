import { useRef, useEffect } from "react";

const lerp = (v0, v1, t) => {
  return v0 * (1 - t) + v1 * t;
};

export function useRotateScroll(listRef) {
  const y = useRef(0);
  const scrollY = useRef(0);
  const scrollSpeed = useRef(0);
  const oldScrollY = useRef(0);

  useEffect(() => {
    const el = listRef.current;
    if (el) {
      const onWheel = (e) => {
        if (e.deltaY == 0) return;
        e.preventDefault();

        el.style.transform = `rotate(${scrollSpeed.current * 0.05}deg)`;
        scrollY.current -= e.deltaY * 0.9;

        y.current = lerp(y.current, scrollY.current, 0.1);
        scrollSpeed.current = y.current - oldScrollY.current;
        oldScrollY.current = y.current;
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, [listRef]);

  return listRef;
}
