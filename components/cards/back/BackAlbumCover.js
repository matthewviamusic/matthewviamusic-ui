import Link from "next/link"
export default function BackAlbumCover({
  handleClick,
  albumName,
  artworkUrl,
  trackName,
  artistName,
  artistAvatar
}) {
  return (
    <>
      <div
        className="absolute top-4 left-0 bg-[#9efddc] bottom-0 p-[2rem] flex flex-col"
        style={{
          // backgroundImage: `url(${artistAvatar})`,
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: "50px 50px",
          borderRadius: "0% 20% 20% 20%"
        }}
      >
        <Link href="/datatable">
          <a>
            <p className="album-name mt-4 text-[#111] mb-3 text-center">
              {albumName}
            </p>
          </a>
        </Link>

        <a onClick={handleClick}>
          <img
            className="cursor-pointer album-art block"
            src={artworkUrl}
            alt={trackName}
          />
        </a>

        <Link href="/docs">
          <a>
            <p className="artist-name text-[#111] mt-2.5 text-center">
              by {artistName}
            </p>
          </a>
        </Link>

        <div
          style={{
            height: 50,
            width: 50,
            position: "absolute",
            bottom: 0,
            right: "calc(50% - 25px)",
            boxShadow: "rgba(0, 0, 0, 0.18) 0px 1px 1px"
          }}
        >
          <a href="https://github.com/matthewviamusic" target="_blank">
            <img
              src="https://matthewviamusic.com/images/avatar/mvm.jpg"
              alt="Matthew Via Music"
            />
          </a>
        </div>
      </div>
    </>
  )
}
