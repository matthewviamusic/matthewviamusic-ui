import { useEffect, useState } from "react"
import axios from "axios"
import Link from "next/link"

import SortTable from "../components/datatable/SortTable"
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
        console.log(">>>>>>>>>ERROR>>>>>>>>>:", error)
        setHasError(true)
      }
    }
    getTracks()
  }, [])

  return hasError ? (
    <h1 className="text-center">ERROR</h1>
  ) : (
    <div className="text-center centerStuff wrapper">
      <div>
        <p>
          <Link href="/albums">&uarr; Albums</Link>
        </p>
        <p>
          <Link href="https://matthewviamusic.com/api/tracks">
            <a target="_blank">API &larr;</a>
          </Link>
          <Link href="/search">
            <a>&nbsp;Search&nbsp;&rarr;</a>
          </Link>
          <Link href="/docs">
            <a>&nbsp;Docs&nbsp;</a>
          </Link>
        </p>
      </div>

      {isLoading ? <Loading /> : <SortTable tracks={tracks} />}
    </div>
  )
}
