import Head from "next/head";
import Meta from "./Meta";

export default function HeaderComponent() {
  return (
    <>
      <Meta />
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="preload"
          href="/fonts/Barlow/Barlow-Regular-400.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Barlow/Barlow-Bold-700.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Barlow/Barlow-Black-900.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
    </>
  );
}
