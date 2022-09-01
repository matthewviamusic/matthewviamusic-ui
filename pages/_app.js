import { install } from "resize-observer"

import Head from "next/head"
import "../css/global.css"

function MVM({ Component, pageProps }) {
  if (typeof window !== "undefined") {
    install()
  }

  return (
    <>
      <Head>
        <meta name="author" content="Matthew Via Music" />
        <meta
          name="description"
          content="API access to the music catalogue of recording artist Matthew Via Music."
        />
        <title>Matthew Via Music</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MVM
