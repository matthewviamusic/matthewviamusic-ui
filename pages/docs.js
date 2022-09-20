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
          navTitle3="Metrics"
          navLink3="/metrics"
        />
      </div>
      {/*  */}
      <div className="mt-4 centerStuffColX">
        <div className="mx-4">
          <a
            class="inline-flex items-center py-2 px-4 rounded bg-black hover:bg-gray-700 transition-all duration-200 text-white text-xl"
            href="https://github.com/matthewviamusic"
            aria-label="Star matthewviamusic on GitHub"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fff"
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              ></path>
            </svg>
            <span class="pl-2">Star</span>
          </a>
        </div>

        <div>
          <a
            class="-mr-1 ml-1 inline-flex items-center py-2 px-2 rounded bg-red-500 hover:bg-red-400 transition-all duration-200 text-white text-xl"
            href="https://matthewviamusic.com/api/tracks"
            aria-label="Access the API catalogue data for Matthew Via Music"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"
              />
            </svg>

            <span class="pl-2">Access API</span>
          </a>
        </div>
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
      {/* <div className="centerStuff">
        <a href="https://github.com/matthewviamusic" target="_blank">
          <img
            className="mt-10 h-[30px]"
            src="/github.png"
            alt="Matthew Via Music on Github"
          />
        </a>
      </div> */}
    </>
  )
}
