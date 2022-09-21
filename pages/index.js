/**
 * App Module
 * @author Matthew Via Music <matthewviamusic@gmail.com>
 * @version 0.0.1
 * @description A full stack application providing users access to the undelying data and music catalogue of recording artist Matthew Via Music.
 *
 */

import { useEffect, useRef } from "react"
import gsap from "gsap"
import Splash from "../components/Splash"
import Nav from "../components/Nav"
/**
 * @returns "Clean up the GSAP timeline"
 */

export default function App() {
  /**
   * @constant {string} 'tl' Assigned to a React 'ref' which enables us to run sequenced animations on the underlying DOM elements/CSS classes.
   */
  const tl = useRef()

  useEffect(() => {
    let hasSplashed = sessionStorage.getItem("splashDown")
    tl.current = gsap.timeline()
    
    if(typeof window !== 'undefined' && !hasSplashed){
      tl.current
        .to(".mvm", { autoAlpha: 1, delay: 1 })
        .from(".overlay", { delay: 1.3 })
        .fromTo(".mvm", { scale: 0.8, opacity: 1 }, { opacity: 0, scale: 14.5, onComplete: () => sessionStorage.setItem("splashDown", true)})
    }
    tl.current
      .from(
        ".overlay",
        {
          height: "100%",
          autoAlpha: 1,
          duration: 1.5,
          ease: "power4.inOut"
          // delay: 0.3
        },
        "<+=.373"
      )
      .to(
        ".overlay",
        {
          duration: 1.3,
          autoAlpha: 0.9,
          height: 0,
          ease: "power4.inOut"
        },
        "<+=.4"
      )
      // .fromTo(
      //   ".cardz",
      //   { autoAlpha: 0, scale: 0.85, ease: "expo.inOut" },
      //   {
      //     scale: 1,
      //     autoAlpha: 1
      //   },
      //   "<-=.6"
      // )
      .to(".nav", {
        autoAlpha: 1,
        ease: "expo.inOut"
      })

    return () => {
      tl.current.kill()
    }
  }, [])

  return (
    <>
      <Splash />
      <div className="nav">
        <Nav />
      </div>
    </>
  )
}
