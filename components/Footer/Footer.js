import { Fragment, useState, useEffect } from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="flex flex-row justify-between w-full py-4 mt-auto">
      <div>
        <p>DARK DOME</p>
      </div>
      <div className="flex">
        <p>© 2022</p>
      </div>
      <Link Link href="/projectPage/">
        <p>WEBSITE BY DEPO STUDIO</p>
      </Link>
    </footer>
  );
};

export default Footer;
