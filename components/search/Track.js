import Link from "next/link"
export default function Track({ track_prop }) {
  return (
    <>
      <div className="text-center flex flex-col justify-center mx-2 w-[250px]">
        <div className="bg-[#FFFB00] w-[100%] -mb-3 ml-0">
          <Link href={`/album/${track_prop.albumName.split(" ").join("+")}`}>
            <a>
              <h2 className="text-lg cursor-pointer mb-3 leading-[1]">
                {track_prop.trackName}
                <span className="text-xs">
                  &nbsp;({track_prop.trackNumber})
                </span>
              </h2>
            </a>
          </Link>
        </div>

        <Link href={track_prop.spotifyUrl}>
          <a target="_blank">
            <img
              className="cursor-pointer mb-4 self-center block w-[250px]"
              src={track_prop.artworkUrl}
              alt={track_prop.albumName}
            />
          </a>
        </Link>
      </div>
    </>
  )
}
