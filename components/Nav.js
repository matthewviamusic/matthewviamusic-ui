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
  const data = [
    {
      id: 1,
      link: "https://matthewviamusic.com/api/tracks",
      target: "_blank",
      icon: "/bullhorn",
      title: "API"
    },
    { id: 2, link: "/docs", icon: "/docs", title: "docs" },
    { id: 3, link: "/albums", icon: "/musicnote", title: "albums" },
    { id: 4, link: "/search", icon: "/search", title: "search" },
    { id: 5, link: "/datatable", icon: "/database", title: "data" },
    { id: 6, link: "/metrics", icon: "/puzzle", title: "metrics" }
  ]
  return (
    <>
      <div className="navCenter">
        <div className="lg:flex w-full justify-center">
          {data.map(x => (
            <div
              key={x.id}
              className="w-full cursor-pointer lg:mx-4 text-xl"
            >
              <Link href={x.link}>
                <a target={x.target}>
                  <div className="xl:max-w-[373px] px-6 my-2 p-3 flex space-x-1 justify-between justify-center items-center cursor-pointer border-1 bg-yellow-50">
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
