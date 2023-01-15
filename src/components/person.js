import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

function Person({ first, last, photo, biography, location = "", crumbLabel }) {
  let slug = `${first}-${last}`.toLowerCase()
  let description = biography.split(" ").slice(0, 40).join(" ")

  return (<>
    <Link className="block w-full h-full" to={`/team/${slug}`}>
      <div className="rounded shadow p-4 h-full">
        <img src={photo} class="rounded-full w-1/2 mb-4" />
        <h3 className="text-lg font-bold">
          {first} {last}
        </h3>
        <p className="text-md">{description || ""}</p>
      </div>
    </Link>
  </>
  )
}
export default Person
