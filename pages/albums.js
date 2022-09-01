import Loading from "../components/Loading"
import s from "../css/albums.module.css"
import { useState, useEffect } from "react"
import Link from "next/link"
import axios from "axios"

export default function albums() {
  const [loading, setLoading] = useState(true)
  const [musicMetaData, setMusicMetaData] = useState(null)

  const loadData = async () => {
    const musicMetaData = await axios.get(
      `${process.env.NEXT_PUBLIC_API_TRACKS_URL}`
    )

    setMusicMetaData(musicMetaData.data.reverse())

    setLoading(false)
  }

  useEffect(() => {
    loadData()
  }, [])

  const results = musicMetaData?.map(track => track)

  const album = results?.filter(x => x.albumName === x.albumName)
  const artwork = results?.filter(
    x => x.artworkUrlRotator === x.artworkUrlRotator
  )

  let albumData = album?.map(({ albumName }) => albumName)
  let artworkData = artwork?.map(({ artworkUrlRotator }) => artworkUrlRotator)

  let x = [...new Set(albumData)]
  let y = [...new Set(artworkData)]

  let finalResult = x.map((value, index) => {
    return {
      albumName: x[index],
      artworkUrlRotator: y[index]
    }
  })

  return (
    <>
      <div className="mt-1 centerStuff">
        <Link href="/">
          <a>
            <img className="h-[20px]" src="/home.svg" alt="Matthew Via Music" />
          </a>
        </Link>
      </div>

      <div className={s.rotatorWrapper}>
        {loading ? (
          <Loading />
        ) : (
          finalResult?.map((x, i) => (
            <div key={i} className="cursor-pointer">
              <Link href={`/album/${x.albumName.split(" ").join("+")}`}>
                <a>
                  <div className={s.disc}>
                    <img
                      className={s.rotator}
                      src={x.artworkUrlRotator}
                      alt={x.albumName}
                    />
                    <span className={s.hole}></span>
                  </div>
                </a>
              </Link>
            </div>
          ))
        )}
      </div>
    </>
  )
}
