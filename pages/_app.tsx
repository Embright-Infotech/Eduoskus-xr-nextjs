import { AppProps } from "next/app";
import dynamic from "next/dynamic";

// Styling and Bootstrap
import '../styles/plugin.css';
import '../styles/responsive.css';
import '../styles/style.css'

const LayoutComponent = dynamic(import("../layout/Layout"));

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <LayoutComponent>
        <Component {...pageProps} />;
      </LayoutComponent>
    </>
  );
}
