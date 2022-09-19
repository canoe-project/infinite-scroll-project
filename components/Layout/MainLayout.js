import { Fragment } from "react";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

import BubbleBlue from "svg/BubbleBlue.svg";
import BubbleGray from "svg/BubbleGray.svg";

import EffectLine1 from "svg/effectLine1.svg";
import EffectLine2 from "svg/effectLine2.svg";
const MainLayout = ({ children, mainHeadCopy }) => {
  return (
    <Fragment>
      <div className="flex flex-col w-screen h-screen bg-[#FCFAF7] relative">
        <BubbleBlue className="absolute right-0 h-3/4" />
        <BubbleGray className="absolute bottom-0 h-3/4" />
        <EffectLine1 className="absolute left-0 h-1/4" />
        <EffectLine2 className="absolute bottom-0 right-0 h-1/5" />
        <div className="flex flex-col p-[2.08em] justify-between relative w-full h-full">
          <Header copy={mainHeadCopy} />
          {children}
          <Footer />
        </div>
      </div>
    </Fragment>
  );
};

export default MainLayout;
