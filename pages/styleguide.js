import PageTransition from "../components/utils/PageTransition"
import SubNav from "../components/SubNav"
import Styleguide from "../components/styleguide/Styleguide"

export default function styleguide() {
  return (
    <>
      <PageTransition delay={0.1} bgCol={"#FEFB00"} />
      <div className="text-center centerStuff">
        <SubNav
          navTitle1="Data Table"
          navLink1="/datatable"
          navTitle2="Docs"
          navLink2="/docs"
          navTitle3="Metrics"
          navLink3="/metrics"
        />

        <Styleguide />
      </div>
    </>
  )
}
