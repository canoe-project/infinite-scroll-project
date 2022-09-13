import { Fragment, useState, useEffect } from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="px-[2.6em]">
      <div className="flex flex-row  w-full justify-between py-4">
        <div>
          <p>DARK DOME</p>
        </div>
        <div className="flex">
          <p>© 2022</p>
        </div>
        <Link Link href="/projectPage/">
          <p>WEBSITE BY DEPO STUDIO</p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
