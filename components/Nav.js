/**
 * App Module
 * @author Matthew Via Music <matthewviamusic@gmail.com>
 * @version 0.0.1
 * @description A full stack application providing users access to the undelying data and music catalogue of recording artist Matthew Via Music.
 * @returns UI of main navigation.
 *
 */

import Link from "next/link"
export default function Nav() {
  /**
@constant {Array} 'data' List of objects containing the navigation items detail.
 */
  const apiLink = "https://matthewviamusic.com/api/tracks"
  const colours = ["#fffb00", "#f3f3f3", "#9efddc"]
  // prettier-ignore
  const data = [
    { id: 1, link: apiLink, target: "_blank", icon: "/bullhorn", title: "api", color: colours[0]},
    { id: 2, link: "/docs", icon: "/docs", title: "docs", color: colours[1] },
    { id: 3, link: "/search", icon: "/search", title: "search", color: colours[2] },
    { id: 4, link: "/albums", icon: "/musicnote", title: "albums", color: colours[0] },
    { id: 5, link: "/datatable", icon: "/database", title: "datatable", color: colours[1] },
    { id: 6, link: "/metrics", icon: "/puzzle", title: "metrics", color: colours[2] },
    { id: 7, link: "/random", icon: "/rocket", title: "random", color: colours[0] }
  ]
  return (
    <>
      <div className="navCenter">
        <div className="lg:flex w-full justify-center">
          {data.map(x => (
            <div key={x.id} className="w-full cursor-pointer lg:mx-4 text-xl">
              <Link href={x.link}>
                <a target={x.target}>
                  <div
                    style={{ background: x.color }}
                    className="xl:max-w-[373px] px-6 my-2 p-3 flex space-x-1 justify-between justify-center items-center cursor-pointer border-1"
                  >
                    <img
                      className="h-[30px]"
                      src={`${x.icon}.svg`}
                      alt={x.icon}
                    />
                    <div>
                      <p className="text-[15px] mr-1.5">/{x.title}</p>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
