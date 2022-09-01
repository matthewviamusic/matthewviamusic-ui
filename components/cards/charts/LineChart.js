import { Line } from "react-chartjs-2"
// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto"

export default function BarChart({ chartData, options }) {
  return (
    <>
      <Line data={chartData} options={options} />
    </>
  )
}
