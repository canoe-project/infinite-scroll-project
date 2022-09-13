import { Fragment } from "react";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
const MainLayout = ({ children, mainHeadCopy }) => {
  return (
    <Fragment>
      <Header />
      <div className="flex flex-col py-[2.08em]">
        <div className="pl-[50%] font[400] text-[2.81em] uppercase">
          <p>{mainHeadCopy}</p>
        </div>
        <div>{children}</div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default MainLayout;
