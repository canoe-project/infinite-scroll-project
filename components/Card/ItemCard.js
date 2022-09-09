import { Fragment, useState, useEffect, useRef } from "react";

import OverLayImage from "../Image/OverlayImage";
import useStyleCard from "../../hook/useStyleCard";

import Link from "next/link";

const cls = (...ele) => ele.join(" ");

const ItemCard = ({ index, name, image, location, mod }) => {
  const cardRef = useRef();

  useStyleCard(cardRef, mod);

  const red = true;

  return (
    <Fragment>
      <Link Link href="/projectPage/">
        <span
          className={cls(
            "flex flex-col flex-shrink-0 border-solid w-[22.4em] h-[29.17em] border-r-[#1c1c21] relative",
            red ? "bg-red-400" : "bg-blue-400"
          )}

          // ref={cardRef}
        >
          <div className="z-10 flex flex-col flex-auto transition duration-500 ease-in-out bg-white hover:opacity-0 border-[1px] border-red-700 p-2">
            <div className="ml-auto  pt-[0.2em] pr-[0.4em] pl-[0.4em] pb-[0.1em] bg-[#1c1c21]">
              <p className="text-[0.94em] font-[400] text-white">{`${location}`}</p>
            </div>

            <div className="relative inline-flex left-1/2 top-1/2 ">
              <p className="text-[6.25rem] italic font-[200] leading-none translate-x-[-50%] translate-y-[-50%] uppercase">{`${index}`}</p>
            </div>
            <div className="self-end mt-auto mr-auto mb-[0.52em] ml-[0.52em] ">
              <p className="text-[2.08em] font-[400] uppercase">{`${name}`}</p>
            </div>
          </div>
          <OverLayImage src={image}></OverLayImage>
        </span>
      </Link>
    </Fragment>
  );
};

export default ItemCard;
