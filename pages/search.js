import { useState, useEffect } from "react"
import Link from "next/link"

import Loading from "../components/Loading"
import { getSearch } from "../components/utils/axios_api"
import SearchBox from "../components/search/SearchBox"
import SearchResultsData from "../components/search/SearchResultsData"

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [tracks_state, setTracks] = useState([])
  const [searchResults_state, setSearchResults] = useState([])

  useEffect(() => {
    getSearch()
      .then(json => {
        setTracks(json)
        setSearchResults(json)
        setLoading(false)
      })
      .catch(error => {
        console.log(error)
        setLoading(true)
      })
  }, [])
  return (
    <>
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

        {loading ? (
          <Loading />
        ) : (
          <div>
            <SearchBox
              tracks_prop={tracks_state}
              setSearchResults_prop={setSearchResults}
            />

            <SearchResultsData searchResults_prop={searchResults_state} />
          </div>
        )}
        {/*  */}
      </div>
    </>
  )
}
