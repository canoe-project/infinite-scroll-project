import { Fragment } from "react";

const MainLayout = ({ children }) => {
  return (
    <Fragment>
      <div>{children}</div>
    </Fragment>
  );
};

export default MainLayout;
