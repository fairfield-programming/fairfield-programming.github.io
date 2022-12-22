import * as React from "react"
import { Link } from "gatsby"

function Person({ first, last, photo, biography }) {

    let slug = `${first}-${last}`.toLowerCase();
    let description = biography.split(' ').slice(0, 40).join(' ');

    return <a className="block w-full h-full" href={`/team/${slug}`}>
        <div className="rounded shadow p-4 h-full">
          <img src={photo} class="rounded-full w-1/2 mb-4" />
            <h3 className="text-lg font-bold">{first} {last}</h3>
            <p className="text-md">{description || ""}</p>
        </div>
    </a>

}
export default Person
