import { Fragment, useState, useEffect } from "react";
import Museum from "../../svg/powerhouse-museum.svg";
import CopyLine from "svg/CopyLines.svg";

const Header = ({ copy }) => {
  return (
    <header className="relative flex flex-row py-4">
      <div className="w-1/2">
        <Museum className="self-start h-12" />
      </div>

      <div className="relative w-1/2">
        {/* <CopyLine className="absolute" /> */}
        <p
          className="font[400] text-[2.81em] uppercase text-[#C2A38E]  font-['Do_Hyeon'] text-left min-h-[3em]"
          // style={{
          //   borderImage: "url('svg/SimpleCopyLines.svg') 100",
          // }}
        >
          {copy}
        </p>
      </div>
    </header>
  );
};

export default Header;
