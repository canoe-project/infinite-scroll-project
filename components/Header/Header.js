import { Fragment, useState, useEffect } from "react";
import Museum from "../../svg/powerhouse-museum.svg";

const Header = ({ copy }) => {
  return (
    <header className="flex flex-row py-4">
      <Museum className="h-20 self-start" />
      <div className="pl-[40%] font[400] text-[2.81em] uppercase">{copy}</div>
    </header>
  );
};

export default Header;
