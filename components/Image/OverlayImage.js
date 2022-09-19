import img from "next/image";
import { Fragment, useState, useEffect } from "react";
import Art_Nouveau_frame from "svg/Art_Nouveau_frame.svg";
import Image from "next/image";
const OverlayImage = ({ src }) => {
  return (
    // <div className="relative w-full h-full bg-[#f2e9e4]">
    <div
      className="relative w-full h-full bg-white drop-shadow-md"
      // style={{
      //   borderImage: "url('svg/Art_Nouveau_frame.svg') 100",
      // }}
    >
      {/* <Art_Nouveau_frame className="absolute z-30 object-center w-full h-full scale-y-75" /> */}
      <div className="relative flex object-cover object-center w-full h-full scale-75">
        <Image src={src} alt="" layout="fill"></Image>
      </div>
    </div>
  );
};

export default OverlayImage;
