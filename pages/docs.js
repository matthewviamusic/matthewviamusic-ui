import PageTransition from "../components/utils/PageTransition"
import SubNav from "../components/SubNav"
import Link from "next/link"
export default function Docs() {
  return (
    <>
      <PageTransition delay={0.1} bgCol={"#9EFDDC"} />

      <div className="text-center centerStuff">
        <SubNav
          navTitle1="Data Table"
          navLink1="/datatable"
          navTitle2="Search"
          navLink2="/search"
        />
      </div>

      <div className="flex flex-col items-center justify-center sm:flex-row mt-10 text-center">
        {/*  */}
        <div className="mb-4 sm:mb-0 sm:mr-8">
          <Link href="/documentation/index.html">
            <a>
              <p className="text-sm mb-2">View Documentation</p>
              <img
                className="w-[400px]"
                src="https://matthewviamusic.com/images/docsimages/func-extractval.png"
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
                src="https://matthewviamusic.com/images/docsimages/docs-card-wireframe.png"
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
