import Axios from "axios"
import { useEffect, useState } from "react"
import CountUp from "react-countup"
import SubNav from "../components/SubNav"
import s from "../css/metrics.module.css"

export default function Genre() {

  const [getData, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      const res = await Axios.get("https://matthewviamusic.com/api/tracks")
      setData(res.data)
    }
    getData()
  }, [])
  console.clear()

  const trackDuration = getData?.map(el => el.trackDuration)

  let totalTracks = trackDuration.length
  let totalMins = trackDuration
    .reduce((total, num) => total + num, 0)
    .toFixed(0)

  let minDuration = Math.min(...trackDuration)
  let maxDuration = Math.max(...trackDuration)

  const arr = trackDuration.filter(val => !!val) // sanity check
  const sum = arr.reduce((sum, val) => (sum += val), 0)
  const len = arr.length

  const calcAverage = (sum / len).toFixed(2)

  const arrSet = [...new Set(arr)] // affects median value (removes duplicate track durations)
  const arrSort = arrSet.sort() // use arr.sort() (for median on all track values inc. dups.)
  const mid = Math.ceil(len / 2)

  const calcMedian =
    len % 2 == 0 ? (arrSort[mid] + arrSort[mid - 1]) / 2 : arrSort[mid - 1]

  const calcMode = arr =>
    [...new Set(arr)]
      .map(value => [value, arr.filter(v => v === value).length])
      .sort((a, b) => b[1] - a[1])
      .filter((v, i, a) => v[1] === a[0][1])
      .map(v => v[0])[0]

  function calcRangeAndCoefficient(arr) {
    let range = maxDuration - minDuration
    let coeffOfRange = range / (maxDuration + minDuration)
    return { range: range, coeff: coeffOfRange }
  }

  return (
    <>
      {
        <>
        <div className="text-center centerStuff">
        <SubNav
          navTitle1="Data Table"
          navLink1="/datatable"
          navTitle2="Docs"
          navLink2="/docs"
          navTitle3="Search"
          navLink3="/search"
        />
      </div>

          <h1 className={s.metricsTitle}>
            <span>Metrics</span>
          </h1>
          <div className={s.metrics}>
            <p>
              Tracks
              <span>
                <CountUp
                  className={s.counter}
                  start={0}
                  end={totalTracks}
                  duration={2.75}
                  useEasing={true}
                  useGrouping={true}
                  decimals={0}
                />
              </span>
            </p>
            <p>
              Minutes<span><CountUp
                  className={s.counter}
                  start={0}
                  end={totalMins}
                  duration={1.75}
                  useEasing={true}
                  useGrouping={true}
                  decimals={0}
                /></span>
            </p>
            <p>
              Hours/Mins<span><CountUp
                  className={s.counter}
                  start={0}
                  end={(totalMins / 60)}
                  duration={2}
                  decimal=":"
                  useEasing={true}
                  useGrouping={true}
                  decimals={2}
                /></span>
            </p>
            <p>
              Average<span><CountUp
                  className={s.counter}
                  start={0}
                  end={calcAverage}
                  duration={3}
                  useEasing={true}
                  useGrouping={true}
                  decimals={2}
                /></span>
            </p>
            <p>
              Median<span><CountUp
                  className={s.counter}
                  start={0}
                  end={calcMedian}
                  duration={2}
                  useEasing={true}
                  useGrouping={true}
                  decimals={2}
                /></span>
            </p>
            <p>
              Mode<span><CountUp
                  className={s.counter}
                  start={0}
                  end={calcMode(trackDuration)}
                  duration={2.25}
                  useEasing={true}
                  useGrouping={true}
                  decimals={2}
                /></span>
            </p>
            <p>
              Longest Track<span><CountUp
                  className={s.counter}
                  start={0}
                  end={maxDuration}
                  duration={2.25}
                  decimal=":"
                  useEasing={true}
                  useGrouping={true}
                  decimals={2}
                /></span>
            </p>
            <p>
              Range CoEff.
              <span><CountUp
                  className={s.counter}
                  start={0}
                  end={calcRangeAndCoefficient(trackDuration).coeff}
                  duration={1.75}
                  useEasing={true}
                  useGrouping={true}
                  decimals={2}
                />
                {/* {calcRangeAndCoefficient(trackDuration).range} &nbsp;
                {calcRangeAndCoefficient(trackDuration).coeff.toFixed(2)} */}
              </span>
            </p>
            <p>
              Shortest Track<span><CountUp
                  className={s.counter}
                  start={0}
                  end={minDuration}
                  duration={2.85}
                  decimal=":"
                  useEasing={true}
                  useGrouping={true}
                  decimals={2}
                /></span>
            </p>
          </div>
        </>
      }
    </>
  )
}
