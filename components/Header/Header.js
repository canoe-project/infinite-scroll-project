import { Fragment, useState, useEffect } from "react";
import Museum from "../../svg/powerhouse-museum.svg";
import Link from "next/link";
const Header = () => {
  useEffect(() => {
    console.log(Museum);
  }, []);
  return (
    <div className="px-[2.6em]">
      <div className="flex flex-row  w-full justify-between py-4">
        <Museum className="w-[12em]" />
        <div className="flex"></div>
      </div>
    </div>
  );
};

export default Header;
