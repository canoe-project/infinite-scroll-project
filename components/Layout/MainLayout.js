import { Fragment } from "react";

const MainLayout = ({ children, mainHeadCopy }) => {
  return (
    <Fragment>
      <div className="pl-[50%] font[400] text-[2.81em] uppercase">
        <p>{mainHeadCopy}</p>
      </div>
      <div>{children}</div>
    </Fragment>
  );
};

export default MainLayout;
