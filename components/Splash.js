/**
 * App Module
 * @author Matthew Via Music <matthewviamusic@gmail.com>
 * @version 0.0.1
 * @description A full stack application providing users access to the undelying data and music catalogue of recording artist Matthew Via Music.
 * @returns Initial on load `Splash` screen animation.
 *
 */
export default function Overlay() {
  return (
    <>
      <div
        className="overlay"
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {/*  */}
        <img
          style={{
            marginTop: "-200px"
          }}
          className="mvm"
          src="mvm.svg"
          alt="Matthew Via Music"
        />
      </div>
    </>
  )
}
