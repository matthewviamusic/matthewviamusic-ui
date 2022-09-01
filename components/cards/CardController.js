import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import axios from "axios"
import Loading from "../Loading"
import CardContainer from "./CardContainer"

export default function CardController() {
  let { query } = useRouter()

  const [loading, setLoading] = useState(true)
  const [musicMetaData, setMusicMetaData] = useState(null)
  const [musicStatsData, setMusicStatsData] = useState(null)
  const [pxaUrlData, setPxaUrlData] = useState(null)

  const loadData = async () => {
    const musicMetaData = await axios.get(
      `${process.env.NEXT_PUBLIC_API_TRACKS_URL}`
    )
    const musicStatsData = await axios.get(
      `${process.env.NEXT_PUBLIC_API_STATS_URL}`
    )
    const pxaUrlData = await axios.get(`${process.env.NEXT_PUBLIC_API_PXA}`)

    const albumTracks = musicMetaData?.data?.filter(
      x => x.albumName === query?.albumName?.split("+").join(" ")
    )

    setMusicMetaData(albumTracks)
    setMusicStatsData(musicStatsData.data)
    setPxaUrlData(pxaUrlData.data)

    setLoading(false)
  }

  useEffect(() => {
    loadData()
  }, [query.albumName])

  function extractValue(arr, prop) {
    let extractedValue = arr?.map(item => item[prop])

    return extractedValue
  }

  const pxaUrl = extractValue(pxaUrlData, "pxaUrl")

  const allData = []

  for (let i = 0; i < musicMetaData?.length; i++) {
    allData.push({
      ...musicMetaData[i],
      pxaUrl: pxaUrl[i]
    })
  }

  return (
    <>
      <div className="my-0 flex align-center justify-center">
        <div className="select-none grid md:m-2 md:gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 grid-flow-row">
          {/*  */}
          {loading ? (
            <Loading />
          ) : (
            allData.map(track => (
              <CardContainer
                key={track.trackName}
                artworkUrl={track.artworkUrl}
                releaseYear={track.releaseYear}
                albumName={track.albumName}
                trackName={track.trackName}
                artistName={track.artistName}
                trackNumber={track.trackNumber}
                trackDuration={track.trackDuration}
                artistAvatar={track.artistAvatar}
                //
                pxaUrl={track.pxaUrl}
                //
                spotifyUrl={track.spotifyUrl}
                albumDuration={track.albumDuration}
                genre={track.genre}
                //
                musicStatsData={musicStatsData}
              />
            ))
          )}
        </div>
      </div>
    </>
  )
}
