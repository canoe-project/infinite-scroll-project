import { Fragment } from "react";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
const MainLayout = ({ children, mainHeadCopy }) => {
  return (
    <div className="flex flex-col p-[2.08em] h-full w-full">
      <Header copy={mainHeadCopy} />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
