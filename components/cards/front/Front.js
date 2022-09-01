export default function Front({
  artworkUrl,
  releaseYear,
  albumName,
  trackName,
  artistName,
  trackNumber,
  trackDuration,
  pxaUrl,
  spotifyUrl,
  albumDuration,
  genre,
  handleFlip
}) {
  return (
    <>
      <div className="rounded-bl-lg rounded-tl-lg card__face card__face--front">
        <div
          className="h-56 p-0"
          style={{
            backgroundImage: `url(${artworkUrl})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "0% 0% 100% 0%"
          }}
        >
          <div className="flex justify-end">
            <div className="mt-2 mr-5">
              <span className="overline tracking-wide font-semibold text-xs text-[#f7f7f7]">
                {genre}
              </span>
            </div>
          </div>

          <div className="h-full flex justify-center items-end -mt-10">
            <a onClick={handleFlip}>
              <img
                className="cursor-pointer h-[50px]"
                src="../finger-print.svg"
                alt="finger-print"
              />
            </a>
          </div>
        </div>

        <div className="p-4 bg-[#f3f3f3] text-right">
          <p className="text-slate-900">
            {trackName.length >= 30
              ? `${trackName.substring(0, 28 - 3)}...`
              : trackName}
          </p>
          <p className="mt-[1.75px] text-slate-400">{artistName}</p>
          <p className="uppercase text-xs mt-1 sm:text-sm tracking-wide">
            <span className="text-slate-400">{releaseYear}</span> •{" "}
            <span className="text-slate-700">{albumName}</span>
          </p>
        </div>
        {/*  */}
        {/*  */}
        <div className="flex border-t border-gray-300 text-xs sm:text-sm bg-[#f6f6f6]">
          {/*  */}
          <div className="p-2 flex-2 inline-flex items-center justify-center">
            <img
              className="ml-3 h-8 w-8 text-slate-600 fill-current mr-3"
              src="../album.svg"
              alt="album"
            />

            <p className="mr-6 sm:ml-1">
              <span className="text-slate-400 mr-1">Track</span>{" "}
              <span className="text-slate-900 font-bold">{trackNumber}</span>
            </p>
          </div>
          {/*  */}
          <div className="pl-0 flex-1 border-l border-dashed border-slate-300 inline-flex items-center justify-center">
            <p className="ml-0 sm:ml-0">
              <span className="text-slate-400 mr-1">Time</span>{" "}
              <span className="text-slate-900 tracking-wide font-bold">
                {trackDuration.toFixed(2)}
              </span>
            </p>
            <img
              className="h-6 w-6 ml-4 sm:h-8 md:w-8 text-slate-600 mr-0"
              src="../filter.svg"
              alt="filter"
            />
          </div>
          {/*  */}
        </div>
        {/*  */}
        {/*  */}

        <div className="pt-3 border-t border-dashed border-slate-400 bg-[#f7f7f7]">
          <div className="pl-4 text-xs uppercase font-bold text-slate-500 tracking-wide">
            <a href={spotifyUrl} target="_blank">
              Listen now on:
            </a>
          </div>

          <div className="h-16 flex items-center pt-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 ml-4 mb-4 bg-cover bg-center rounded-full">
              <a href={spotifyUrl} target="_blank">
                <img
                  className="h-[40px]"
                  src="../spotify-logo.svg"
                  alt="spot"
                />
              </a>
            </div>

            <div className="mb-4 ml-4">
              <p className="text-slate-600 -mt-0.5 mb-[0.75px]">
                <a href={spotifyUrl} target="_blank">
                  Spotify
                </a>
              </p>
              <p className="text-xs text-slate-700">
                <span className="tracking-wide text-slate-400">
                  Album Runtime
                </span>
                <span className="ml-2 font-bold tracking-wide md:text-sm bg-[#f7f7f7]">
                  {albumDuration.toFixed(2)}
                </span>
              </p>
            </div>
          </div>

          <div
            style={{
              height: 50,
              width: 50,
              position: "absolute",
              bottom: 20,
              right: 25,
              boxShadow: "rgba(0, 0, 0, 0.18) 0px 1px 1px"
            }}
          >
            <a href={spotifyUrl} target="_blank">
              <img
                src={pxaUrl ? pxaUrl : process.env.NEXT_PUBLIC_API_PXA_DEFAULT}
                alt="Pixel Art"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
