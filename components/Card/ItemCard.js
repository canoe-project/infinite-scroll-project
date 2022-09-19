import { Fragment, useState, useEffect, useRef } from "react";

import OverLayImage from "../Image/OverlayImage";

import ArtNouveauLine from "svg/Art_Nouveau_line.svg";

// import useClickCard from "hook/useClickCard";
const cardStyle = (...rest) => {
  return rest.join(" ");
};

const ItemCard = ({
  index,
  name,
  image,
  location,
  description,
  marginTops,
  marginBottoms,
}) => {
  const [cardClick, setCardClick] = useState(false);

  return (
    <Fragment>
      <div
        className={` flex flex-row relative`}
        onClick={() => setCardClick((preClick) => !preClick)}
      >
        <span
          className={
            "flex flex-col flex-shrink-0 flex-grow  w-64 h-4/5 relative mx-8  "
          }
          style={{
            marginTop: `${marginTops[index % 3]}em`,
            marginBottom: `${marginBottoms[index % 3]}em`,
          }}
        >
          <OverLayImage src={image}></OverLayImage>
          {/*image name*/}
          {/* <div
            className="relative flex object-cover object-center w-full h-full px-10 pt-4 mt-2 scale-[0.8]"
            style={{
              backgroundImage: "url('svg/background_name_frame.svg')",
              backgroundRepeat: "no-repeat",
            }}
          >
            <p
              className={cardStyle(
                "text-[1em] font-[400] uppercase font-['Noto_Sans_KR']  text-[#22223B]  text-center"
              )}
            >{`${name.length >= 16 ? `${name.substring(0, 15)}...` : name}`}</p>
          </div> */}
        </span>

        {/*detail data*/}
        <div
          className={`flex flex-col  self-start p-12 bg-white border-[0.4em] border-[#C2A38E] h-[30em] text-[#22223B] overflow-auto transition ease-in-out delay-150 scrollbar-hide  ${
            cardClick === false ? "scale-x-0 w-0" : "scale-x-100 w-[35em]"
          }`}
        >
          <ArtNouveauLine className="self-center h-7" />
          <h3 className="my-5 font-['Do_Hyeon'] text-4xl font-semibold p-8">
            {name}
          </h3>
          <ArtNouveauLine className="rotate-180 h-7" />
          <p className="mt-8 font-['Noto_Sans_KR'] font-normal">
            {description}
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default ItemCard;
