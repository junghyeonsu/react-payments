import type { PropsWithChildren } from "react";
import React from "react";

const Layout = ({ children }: PropsWithChildren<Record<never, any>>): JSX.Element => {
  return <div className="app">{children}</div>;
};

export default Layout;
