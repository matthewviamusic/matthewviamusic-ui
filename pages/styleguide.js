import PageTransition from "../components/utils/PageTransition"
import Link from "next/link"
import Styleguide from "../components/styleguide/Styleguide"

export default function styleguide() {
  return (
    <>
      <PageTransition delay={0.1} bgCol={"#FEFB00"} />
      <div className="text-center centerStuff">
        <div>
          <p>
            <Link href="/albums">&uarr; Albums</Link>
          </p>
          <p>
            <Link href="https://matthewviamusic.com/api/tracks">
              <a target="_blank">API &larr;</a>
            </Link>
            <Link href="/datatable">
              <a>&nbsp;Data Table&nbsp;&rarr;</a>
            </Link>
            <Link href="/docs">
              <a>&nbsp;Docs&nbsp;</a>
            </Link>
          </p>
        </div>

        <Styleguide />
      </div>
    </>
  )
}
