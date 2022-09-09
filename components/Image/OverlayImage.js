import img from "next/image";
import { Fragment, useState, useEffect } from "react";
import Image from "next/image";
const OverlayImage = ({ src }) => {
  return (
    <Fragment>
      <Image src={src} alt="" className="absolute p-2 " layout="fill"></Image>
    </Fragment>
  );
};

export default OverlayImage;
