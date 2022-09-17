import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Link from "next/link"
import Axios from "axios"
import Error from "../../components/Error"
import Loading from "../../components/Loading"
import s from "../../css/genres.module.css"

export default function GenreName() {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [getData, setData] = useState([])

  const getTheData = async () => {
    try {
      const res = await Axios.get(`${process.env.NEXT_PUBLIC_API_GENRE_URL}`)
      setData(res.data)

      setIsLoading(false)
      setHasError(false)
    } catch (error) {
      console.log("*** An ERROR has occurred ***", error)
      setHasError(true)
    }
  }
  useEffect(() => {
    getTheData()
  }, [])

  console.clear()

  let genres = [
    "Ambient Rock",
    "Electro Nouveau",
    "Electronic Dystopian",
    "Improvised Ambient",
    "Jazzy Funk",
    "New Wave",
    "Pop",
    "Synthetic Classical"
  ]

  let genre = genres?.map(x => x)
  let data = getData?.map(x => x)

  let results = genre?.map(x => data.filter(e => e.genre === x)).flat()

  let genreName = router.query?.genreName
  let genrePage = results?.filter(
    el => el.genre === genreName?.split("+").join(" ")
  )

  return (
    <>
      <div className="text-center w-full">
        <Link href="/albums">&uarr; Albums</Link>
      </div>

      {hasError ? (
        <Error />
      ) : isLoading ? (
        <Loading />
      ) : (
        <>
          <h1 className={s.title}>
            <span>{`${genreName?.split("+").join(" ")}`}</span>
          </h1>

          <div className={s.genre}>
            {genrePage.map(x => (
              <div key={x.albumName}>
                {/* <p>{x.albumName}</p> */}
                <a href={`/album/${x.albumName.split(" ").join("+")}`}>
                  <img
                    src={x.artworkUrl}
                    alt={x.albumName}
                    className={s.genre_albumArtwork}
                  />
                </a>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  )
}
