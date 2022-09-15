import { useRef, useEffect } from "react";

const onClick = (e) => {
  console.log(e);
};

const useClickCard = () => {
  const cardRef = useRef();

  useEffect(() => {
    if (cardRef.current) {
      const cardEl = cardRef.current;
      cardEl.addEventListener("click", onClick);
    }
  }, [cardRef]);

  return cardRef;
};

export default useClickCard;
