export default function Loading() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw"
        }}
      >
        <p className="-rotate-3 my-2 text-[2vw] text-[#ff3333]">
          &rarr; ERROR!!!
        </p>
        <p className="mb-5">
          Looks like something has broken. Please try again later.
        </p>
        <div>
          <img
            style={{ boxShadow: "rgba(0, 0, 0, 0.18) 0px 1px 1px" }}
            className="rounded-full"
            src="/pxa14.gif"
            alt="Pixel Art"
          />
        </div>
      </div>
    </>
  )
}
