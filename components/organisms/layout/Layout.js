import React from "react";
import { Footer, Header, SocialBar } from "../../molecules";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <SocialBar />
      <Footer />
    </>
  );
};
