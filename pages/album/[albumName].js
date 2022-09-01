import Link from "next/link"

import CardController from "../../components/cards/CardController"

export default function App() {
  return (
    <>
      <div className="text-center w-full">
        <Link href="/albums">&uarr; Albums</Link>
      </div>
      <CardController />
    </>
  )
}
