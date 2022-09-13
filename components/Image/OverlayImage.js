import img from "next/image";
import { Fragment, useState, useEffect } from "react";
import Image from "next/image";
const OverlayImage = ({ src }) => {
  return (
    <Fragment>
      <div className="absolute flex w-[20.2em] h-[24.79em]  object-center ">
        <Image src={src} alt="" layout="fill"></Image>
      </div>
    </Fragment>
  );
};

export default OverlayImage;
