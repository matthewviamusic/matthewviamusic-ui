import GetViewport from "../utils/GetViewport"
import { useSortableData } from "../utils/useSortableData"

const DataTable = props => {
  const { width } = GetViewport()

  const { items, requestSort, sortConfig } = useSortableData(props.tracks)
  const getClassNamesFor = name => {
    if (!sortConfig) {
      return
    }
    return sortConfig.key === name ? sortConfig.direction : undefined
  }

  const tableHeadTitles = []
  width > 680
    ? (tableHeadTitles = [
        "Track Name",
        "Album Name",
        "Track Duration",
        "Album Duration",
        "Release Year",
        "Genre",
        "Track Number"
      ])
    : (tableHeadTitles = [
        "Track Name",
        "Album Name",
        "Track Duration",
        "Album Duration"
      ])

  function makeCamelCase(str) {
    return str
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
  }

  return (
    <>
      <table className="w-full">
        <thead className="text-xs text-gray-500 uppercase">
          <tr>
            {tableHeadTitles.map((n, i) => {
              return (
                <th className="sticky top-[0]" key={i}>
                  <button
                    type="button"
                    onClick={() => requestSort(`${makeCamelCase(n)}`)}
                    className={getClassNamesFor(`${makeCamelCase(n)}`)}
                  >
                    &nbsp;{`${n.toUpperCase()}`} &uarr;&darr;
                  </button>
                </th>
              )
            })}
          </tr>
        </thead>
        {width > 680 ? (
          <tbody className="text-gray-700 uppercase bg-gray-100">
            {items.map(item => (
              <tr key={item.id}>
                <td>{item.trackName}</td>
                <td>{item.albumName}</td>
                <td>{item.trackDuration.toFixed(2)}</td>
                <td>{item.albumDuration.toFixed(2)}</td>

                <td>{item.releaseYear}</td>
                <td>{item.genre}</td>
                <td>{item.trackNumber}</td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody className="text-gray-700 uppercase bg-gray-100">
            {items.map(item => (
              <tr key={item.id}>
                <td>{item.trackName}</td>
                <td>{item.albumName}</td>
                <td>{item.trackDuration.toFixed(2)}</td>
                <td>{item.albumDuration.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </>
  )
}

export default function SortTable({ tracks }) {
  function refreshPage() {
    window.location.reload(false)
  }
  return (
    <>
      <button
        className="bg-[aliceblue] w-20 p-1 mt-3 w-full"
        onClick={refreshPage}
      >
        Reset table
      </button>
      <DataTable tracks={tracks} />
    </>
  )
}
