import { Bubble } from "react-chartjs-2"
// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto"

export default function BubbleChart({ chartData, options }) {
  return (
    <>
      <Bubble data={chartData} options={options} />
    </>
  )
}
