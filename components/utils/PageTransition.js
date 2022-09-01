import { useRef, useEffect } from "react"
import gsap from "gsap"

function Transition({ delay, bgCol }) {
  const timeline = gsap.timeline().delay(delay)
  const img = useRef(null)

  const trans = useRef(null)
  useEffect(() => {
    timeline
      .to(img.current, {
        duration: 0.4,
        ease: "Power2.easeIn",
        autoAlpha: 1
      })
      .to(trans.current, {
        duration: 1,
        y: "-100%",
        ease: "Power2.easeIn"
      })
  })
  return (
    <div
      style={{ backgroundColor: bgCol }}
      className="transition-effect"
      ref={trans}
    >
      <img ref={img} src="./loading.svg" alt="album" />
    </div>
  )
}

export default Transition
