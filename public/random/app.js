const getData = async () => {
  document.getElementById("cardContainer").classList.remove("hideOnLoad")
  document.getElementById("subContainer").classList.remove("subContainer")
  document.getElementById("button").classList.add("btnRemoveButtonBorder", "wipe", "d-wipe")
  // document.getElementById("span").classList.remove("vibrate")

  let artworkUrl = document.getElementById("artworkUrl")
  let trackName = document.getElementById("trackName")
  const albumName = document.getElementById("albumName")
  const releaseYear = document.getElementById("releaseYear")
  const genre = document.getElementById("genre")
  const spotifyUrl = document.getElementById("spotifyUrl")

  let result = []
  let random = []

  try {
    const res = await fetch(`https://matthewviamusic.com/api/tracks`)
    
    if (!res.ok) {
      const message = `An error has occured: ${res.status}`;
      console.dir(message)
      throw new Error(message);
    }

    const data = await res.json()

    random = Math.ceil(Math.random() * data.length)

    const res2 = await fetch(
      `https://matthewviamusic.com/api/tracks/paginate?limit=1&offset=${random}`
    )
    if (!res2.ok) {
      const message = `An error has occured: ${res2.status}`;
      console.dir(message)
      throw new Error(message);
    }
    const track = await res2.json()

    if (track.length) {
      result.pop()
    }
    result.push(track)

    result[0].map(
      el => (
        (artworkUrl.style.backgroundImage = `url(${el.artworkUrl})`),
        el.trackName.length > 24
          ? (trackName.innerText = `${el.trackName.substring(0, 24)}...`)
          : (trackName.innerText = el.trackName),
        (albumName.innerText = el.albumName),
        (releaseYear.innerText = el.releaseYear),
        (genre.innerText = el.genre),
        (spotifyUrl.href = el.spotifyUrl)
      )
    )
  } catch (error) {
    console.warn("Something went wrong.", error)
  }
}

document.addEventListener("click",
  function (event) {
    if (!event.target.matches(".click-me")) return

    event.preventDefault()

    getData().catch(err => err.message)
  },
  false
)

getData().catch(err => err.message)