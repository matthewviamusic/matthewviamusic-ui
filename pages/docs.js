import PageTransition from "../components/utils/PageTransition"
import Link from "next/link"
export default function Docs() {
  return (
    <>
      <PageTransition delay={0.1} bgCol={"#9EFDDC"} />
      <div className="text-center">
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
          <Link href="/search">
            <a>&nbsp;Search&nbsp;</a>
          </Link>
        </p>
      </div>
      {/*  */}

      <div className="flex flex-col items-center justify-center sm:flex-row mt-10 text-center">
        {/*  */}
        <div className="mb-4 sm:mb-0 sm:mr-8">
          <Link href="/documentation/index.html">
            <a>
              <p className="text-sm mb-2">View Documentation</p>
              <img
                className="w-[400px]"
                src="https://mvmdocsimages.olk1.com/func-extractval.png"
                alt="Wireframe track card"
              />
            </a>
          </Link>
        </div>
        {/*  */}
        <div>
          <Link href="/styleguide">
            <a>
              <p className="text-sm mb-2">View Style Guide</p>
              <img
                className="w-64"
                src="https://mvmdocsimages.olk1.com/docs-card-wireframe.png"
                alt="Wireframe track card"
              />
            </a>
          </Link>
        </div>
        {/*  */}
      </div>
      {/*  */}
      <div className="centerStuff">
        <a href="https://github.com/matthewviamusic" target="_blank">
          <img
            className="mt-10 h-[30px]"
            src="/github.png"
            alt="Matthew Via Music on Github"
          />
        </a>
      </div>
    </>
  )
}
