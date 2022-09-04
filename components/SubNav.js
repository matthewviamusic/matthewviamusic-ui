import Link from "next/link"
export default function SubNav({ navTitle1, navTitle2, navLink1, navLink2 }) {
  return (
    <>
      <div>
        <p>
          <Link href="/albums">&uarr; Albums</Link>
        </p>
        <p>
          <Link href="https://matthewviamusic.com/api/tracks">
            <a target="_blank">API &larr;</a>
          </Link>
          {/*  */}
          <Link href={navLink1}>
            <a>&nbsp;{navTitle1}&nbsp;&rarr;</a>
          </Link>
          <Link href={navLink2}>
            <a>&nbsp;{navTitle2}&nbsp;</a>
          </Link>
        </p>
      </div>
    </>
  )
}
