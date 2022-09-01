import { useState } from "react"
import Front from "./front/Front"
import BackChartToggle from "./back/BackChartToggle"

export default function CardContainer({
  artworkUrl,
  releaseYear,
  albumName,
  trackName,
  artistName,
  trackNumber,
  trackDuration,
  artistAvatar,
  pxaUrl,
  spotifyUrl,
  genre,
  albumDuration,
  //
  musicStatsData
}) {
  const [isActive, setIsActive] = useState(false)

  const handleFlip = () => {
    setIsActive((current) => !current)
  }

  return (
    <>
      <div
        className={
          "my-1 md:my-0 w-[335px] h-[470px] font-mono tracking-tight overflow-hidden"
        }
      >
        <div className={"card__inner" + (isActive ? " is-flipped" : "")}>
          {/*  */}
          {/*  */}
          <Front
            handleFlip={handleFlip}
            artworkUrl={artworkUrl}
            releaseYear={releaseYear}
            albumName={albumName}
            trackName={trackName}
            artistName={artistName}
            trackNumber={trackNumber}
            trackDuration={trackDuration}
            pxaUrl={pxaUrl}
            spotifyUrl={spotifyUrl}
            albumDuration={albumDuration}
            genre={genre}
          />
          {/*  */}
          <BackChartToggle
            artworkUrl={artworkUrl}
            albumName={albumName}
            trackName={trackName}
            artistName={artistName}
            musicStatsData={musicStatsData}
            artistAvatar={artistAvatar}
            handleFlip={handleFlip}
          />
          {/*  */}
          {/*  */}
        </div>
      </div>
    </>
  )
}
