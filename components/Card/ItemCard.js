import { Fragment, useState, useEffect, useRef } from "react";

import OverLayImage from "../Image/OverlayImage";
import Link from "next/link";

const cardStyle = (...rest) => {
  return rest.join(" ");
};

const ItemCard = ({
  index,
  name,
  image,
  location,
  marginTops,
  marginBottoms,
}) => {
  return (
    <Fragment>
      <Link Link href="/projectPage/">
        <span
          className={
            "flex flex-col flex-shrink-0 flex-grow border-solid w-[22.4em] h-[30em]  border-r-[#1c1c21] border-r-[1px] relative pr-[1.04em] pl-[1.04em]  "
          }
          style={{
            marginTop: `${marginTops[index % 3]}em`,
            marginBottom: `${marginBottoms[index % 3]}em`,
          }}
        >
          <div className="flex flex-auto  mt-[5.21em]">
            <OverLayImage src={image}></OverLayImage>
            <div
              className={cardStyle(
                "z-10 flex flex-col flex-auto transition duration-500 ease-in-out  hover:opacity-0 border-[1px] border-red-700",
                index % 3 ? "bg-white" : "bg-black"
              )}
            >
              <div
                className={cardStyle(
                  "ml-auto  pt-[0.2em] pr-[0.4em] pl-[0.4em] pb-[0.1em]",
                  index % 3 ? " bg-[#1c1c21]" : "bg-white"
                )}
              >
                <p
                  className={cardStyle(
                    "text-[0.94em] font-[400]",
                    index % 3 ? "text-white" : "text-black"
                  )}
                >{`${location}`}</p>
              </div>

              <div className="relative inline-flex left-1/2 top-1/2 ">
                <p
                  className={cardStyle(
                    "text-[6.25rem] italic font-[200] leading-none translate-x-[-50%] translate-y-[-50%] uppercase",
                    index % 3 ? "text-black" : "text-white"
                  )}
                >{`${index}`}</p>
              </div>
              <div className="self-end mt-auto mr-auto mb-[0.52em] ml-[0.52em] ">
                <p
                  className={cardStyle(
                    "text-[1.25em] font-[400] uppercase",
                    index % 3 ? "text-black" : "text-white"
                  )}
                >{`${name}`}</p>
              </div>
            </div>
          </div>
        </span>
      </Link>
    </Fragment>
  );
};

export default ItemCard;
