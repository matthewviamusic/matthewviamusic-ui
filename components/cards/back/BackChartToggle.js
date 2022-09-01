import Link from "next/link"
import { useState } from "react"
import LineChart from "../charts/LineChart"
import BarChart from "../charts/BarChart"
import BubbleChart from "../charts/BubbleChart"
import BackAlbumCover from "./BackAlbumCover"

export default function Back({
  handleFlip,
  musicStatsData,
  artworkUrl,
  albumName,
  trackName,
  artistName,
  artistAvatar
}) {
  const [isShown, setIsShown] = useState(true)

  const handleClick = e => {
    setIsShown(current => !current)
  }

  const barChart = {
    labels: musicStatsData.map(stat => stat.day),
    datasets: [
      {
        label: "Streams",
        data: musicStatsData.map(stat => stat.streams),
        fill: false,
        backgroundColor: [
          "#ff8a7b",
          "#124777",
          "#9acdc2",
          "#ffd7a3",
          "#548b7e"
        ],
        tension: 0.1
      }
    ]
  }

  const bubbleChart = {
    labels: musicStatsData.map(stat => stat.perc_change),
    datasets: [
      {
        label: "Percentage Change",
        data: musicStatsData.map(stat => stat.perc_change),
        backgroundColor: [
          "#ff8a7b",
          "#124777",
          "#9acdc2",
          "#ffd7a3",
          "#548b7e",
          "#f782c2",
          "#d527b7"
        ],
        fill: false,
        borderWidth: 1,
        borderColor: "rgb(255, 255, 192)",
        borderCapStyle: "butt",
        drawOnChartArea: true,
        pointBorderWidth: 0,
        pointHoverRadius: 1,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 1,
        pointRadius: 4,
        tension: 0.5
      }
    ]
  }

  const lineChart = {
    labels: musicStatsData.map(stat => stat.day),
    datasets: [
      {
        label: "Listeners",
        data: musicStatsData.map(stat => stat.listeners),
        fill: false,
        borderWidth: 1,
        backgroundColor: "green",
        borderColor: "rgb(75, 192, 192)",
        borderCapStyle: "butt",
        borderDash: [15, 5],
        drawOnChartArea: false,
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 5,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 1,
        tension: 0.1
      }
    ]
  }

  const options = {
    plugins: {
      legend: {
        // onClick: (e) => e.stopPropagation,
        display: true,
        labels: {
          color: "grey",
          font: {
            size: 14
          },
          boxWidth: 0
        }
      }
    }
  }

  return (
    <>
      <div className="card__face card__face--back">
        <div className="flex flex-col">
          {/* bg-[#111] overriden by global.css / .card__face--back */}
          <div className="z-10 bg-[#111] w-full text-white text-xs italic cursor-pointer">
            <a onClick={handleFlip}>
              <p className="absolute top-0 left-0 px-2 py-[1px]">FLIP!</p>
            </a>
            <Link href="/search">
              <a>
                <p className="absolute top-0 right-0 px-2 py-[1px]">
                  Search Catalogue
                </p>
              </a>
            </Link>
          </div>

          {isShown ? (
            <>
              <div onClick={handleClick} className="mt-1 cursor-pointer w-full">
                <BarChart chartData={barChart} options={options} />
              </div>
              <a onClick={handleClick}>
                <div className="cursor-pointer w-full">
                  <BubbleChart chartData={bubbleChart} options={options} />
                </div>
              </a>
              <div onClick={handleClick} className="cursor-pointer w-full">
                <LineChart chartData={lineChart} options={options} />
              </div>
            </>
          ) : (
            <BackAlbumCover
              handleClick={handleClick}
              albumName={albumName}
              artworkUrl={artworkUrl}
              trackName={trackName}
              artistName={artistName}
              artistAvatar={artistAvatar}
            />
          )}
        </div>
      </div>
    </>
  )
}
