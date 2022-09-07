import { Fragment, useState, useEffect } from "react";
import Image from "next/image";
const ItemCard = ({ index, name, image, location }) => {
  return (
    <Fragment>
      <span className="flex flex-shrink-0 border-[1px] border-red-700 border-solid w-[22.4em] h-[29.17em] flex-col">
        <div className="z-10 ml-auto">{`${location}`}</div>
        <div className="relative inline-flex left-1/2 top-1/2 ">
          <p className="text-[6.25rem] italic font[200] translate-x-[-50%] translate-y-[-50%] uppercase">{`${index}`}</p>
        </div>
        <div className="self-end mt-auto mr-auto mb-[0.52em] ml-[0.52em]">
          <p className="text-[2.08em] font[400] uppercase">{`${name}`}</p>
        </div>
        {/* <Image src={image} alt={""} width={40} height={40} /> */}
      </span>
    </Fragment>
  );
};

export default ItemCard;
