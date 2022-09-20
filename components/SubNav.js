import Link from "next/link"
export default function SubNav({ navTitle1, navTitle2, navTitle3, navLink1, navLink2, navLink3 }) {
  return (
    <>
      <div>
        <p>
          <Link href="/albums">&uarr; Albums</Link>
        </p>
        <p>
          <Link href={navLink3}>
            <a>&nbsp;{navTitle3}&nbsp;&larr;</a>
          </Link>
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
