import { useEffect, useState } from "react"
import axios from "axios"
import SubNav from "../components/SubNav"

import SortTable from "../components/datatable/SortTable"
import Error from "../components/Error"
import Loading from "../components/Loading"

export default function DataTable() {
  const [tracks, setTracks] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  useEffect(() => {
    const getTracks = async () => {
      try {
        const res = await axios.get(process.env.NEXT_PUBLIC_API_TRACKS_URL)
        setTracks(res.data)
        setIsLoading(false)
        setHasError(false)
      } catch (error) {
        console.log("*** An ERROR has occurred ***", error)
        setHasError(true)
      }
    }
    getTracks()
  }, [])

  return (
    <>
      <div className="text-center centerStuff wrapper">
        <SubNav
          navTitle1="Search"
          navLink1="/search"
          navTitle2="Docs"
          navLink2="/docs"
        />

        {hasError ? (
          <Error />
        ) : isLoading ? (
          <Loading />
        ) : (
          <SortTable tracks={tracks} />
        )}
      </div>
    </>
  )
}
