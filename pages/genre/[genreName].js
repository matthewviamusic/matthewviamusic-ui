import { useRouter } from 'next/router'
import Link from "next/link"
import Axios from "axios"
import { useEffect, useState } from "react"
import s from "../../css/genres.module.css"

export default function GenreName() {
  const router = useRouter()
  const { pid } = router.query

  const [getData, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      const res = await Axios.get(`${process.env.NEXT_PUBLIC_API_GENRE_URL}`)
      setData(res.data)
    }
    getData()
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
  // console.dir(genre)
  let data = getData?.map(x => x)

  let results = genre?.map(x => data.filter(e => e.genre === x)).flat()
  
  let genreName = router.query?.genreName
  let genrePage = results?.filter(el => el.genre === genreName?.split("+").join(" "))
  
  return (
    <>
      <div className="text-center w-full">
        <Link href="/albums">&uarr; Albums</Link>
      </div>

        <h1 className={s.title}><span>{`${genreName?.split("+").join(" ")}`}</span></h1>
        
        <div className={s.genre}>
            <>
          {genrePage.map(x => (
              <div key={x.albumName}>
                {/* <p>{x.albumName}</p> */}
              <a
                href={`/album/${x.albumName
                  .split(" ")
                  .join("+")}`}
              >
                <img
                  src={x.artworkUrl}
                  alt={x.albumName}
                  className={s.genre_albumArtwork}
                />
              </a>
              </div>
          ))}
            </>
        </div>
      
    </>
  )
}

