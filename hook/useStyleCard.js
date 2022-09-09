import { useRef, useEffect } from "react";

const useStyleCard = (cardRef, mod) => {
  useEffect(() => {
    const el = cardRef.current;
    if (el) {
      console.log(mod.backgroundColor);
      el.style.backgroundColor = "red";
    }
  }, [cardRef, mod]);

  return cardRef;
};

export default useStyleCard;
