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

  const result = genrePage.map(el => [el.albumName, el.artworkUrl]).sort()

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
            {result.map(el => (
              <div key={el[0]}>
                <a href={`/album/${el[0].split(" ").join("+")}`}>
                  <img
                    src={el[1]}
                    alt={el[0]}
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
