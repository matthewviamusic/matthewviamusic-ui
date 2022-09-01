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
    { id: 1, link: "/docs", icon: "/docs", title: "docs" },
    { id: 2, link: "/albums", icon: "/musicnote", title: "albums" },
    { id: 3, link: "/search", icon: "/search", title: "search" },
    { id: 4, link: "/datatable", icon: "/database", title: "data" }
  ]
  return (
    <>
      <div className="navCenter">
        <div className="sm:flex w-full sm:justify-center">
          {data.map(x => (
            <div
              key={x.id}
              className="w-full sm:max-w-xs cursor-pointer sm:mx-4 text-xl"
            >
              <Link href={x.link}>
                <a>
                  <div className="cursor-pointer border-1 my-2 bg-yellow-50 p-3 flex space-x-1 justify-between sm:justify-center items-center sm:content-center">
                    <img
                      className="h-[30px] pl-4 mr-1"
                      src={`${x.icon}.svg`}
                      alt={x.icon}
                    />
                    <div className="pr-6 sm:pr-0">
                      <p className="text-[15px]">/{x.title}</p>
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
