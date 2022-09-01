import sb from "../../css/searchbox.module.css"
export default function Search({ tracks_prop, setSearchResults_prop }) {
  //
  const keys = ["trackName", "albumName", "trackNumber", "genre"]
  //

  const handleSearch = e => {
    const results_api = tracks_prop.filter(track =>
      keys.some(key =>
        track[key]
          .toString()
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      )
    )
    setSearchResults_prop(results_api)
  }
  return (
    <>
      <header className={`${sb.searchBox} flex justify-center`}>
        <input
          type="text"
          id="search"
          name="search"
          onChange={handleSearch}
          placeholder="Search tracks by Matthew Via Music"
          onFocus={e => (e.target.placeholder = "")}
          onBlur={e =>
            (e.target.placeholder = "Search tracks by Matthew Via Music")
          }
        />
      </header>
    </>
  )
}
