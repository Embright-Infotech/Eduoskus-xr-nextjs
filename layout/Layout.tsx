import dynamic from "next/dynamic";
import Head from "next/head";

const HeaderComponent = dynamic(import("../components/Header"));
const NavbarComponent = dynamic(import("../components/Navbar"));
const FooterComponent = dynamic(import("../components/Footer"));

export default function LayoutModule({ children }) {
  return (
    <>
      <HeaderComponent />
      <NavbarComponent />
      {children}
      <FooterComponent />
    </>
  );
}
