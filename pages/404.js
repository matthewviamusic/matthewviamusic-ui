import Head from "next/head"
import { useEffect } from "react"
import { useRouter } from "next/router"

function PageNotFound() {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      router.push("/albums")
    }, 1000)
  }, [])

  return (
    <>
      <Head>
        <title>404 Page Not Found</title>
        <link
          rel="shortcut icon"
          href="https://easycss.github.io/favicon/favicon.png"
          type="image/x-icon"
        />
      </Head>
      <div className="text-center flex flex-col justify-center mt-48 items-center">
        <h2 className="text-[48px]">Redirecting...one moment please...</h2>
      </div>{" "}
    </>
  )
}

export default PageNotFound
