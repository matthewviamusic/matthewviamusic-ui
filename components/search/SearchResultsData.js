import Track from "./Track"

export default function SearchResultsData({ searchResults_prop }) {
  const results = searchResults_prop.map((track) => (
    <Track key={track.id} track_prop={track} />
  ))

  const content = results?.length ? (
    <div className="flex flex-wrap justify-center">{results}</div>
  ) : (
    <article>
      <p>No matching tracks</p>
    </article>
  )

  return (
    <>
      <main className="mt-5">{content}</main>
    </>
  )
}
