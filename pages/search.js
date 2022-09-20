import { useState, useEffect } from "react"
import Error from "../components/Error"
import Loading from "../components/Loading"
import { getSearch } from "../components/utils/axios_api"
import SubNav from "../components/SubNav"
import SearchBox from "../components/search/SearchBox"
import SearchResultsData from "../components/search/SearchResultsData"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [tracks_state, setTracks] = useState([])
  const [searchResults_state, setSearchResults] = useState([])

  useEffect(() => {
    getSearch()
      .then(json => {
        setTracks(json)
        setSearchResults(json)
        setIsLoading(false)
        setHasError(false)
      })
      .catch(error => {
        console.log("*** An ERROR has occurred ***", error)
        setHasError(true)
      })
  }, [])
  return (
    <>
      <div className="text-center centerStuff">
        <SubNav
          navTitle1="Data Table"
          navLink1="/datatable"
          navTitle2="Docs"
          navLink2="/docs"
          navTitle3="Metrics"
          navLink3="/metrics"
        />

        {hasError ? (
          <Error />
        ) : isLoading ? (
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
