import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Program from "../components/program"

const Team = ({ pageContext }) => {

    const { first, last, photo, biography, works, work } = pageContext;
    const programs = require('../../data/programs.json').programs;

  return <Layout>
    <section>
        <div class="mx-auto max-w-screen-xl px-4 py-16">
            <img src={photo} alt={`A photo of ${first} ${last}.`} class="rounded-full h-48 mb-4" />
            <h1 className="font-bold text-4xl mb-4">{first} {last}</h1>
            <p className="text-xl mb-16 max-w-2xl">{biography}</p>
            <h2 className="font-bold text-3xl mb-4">{first}'s Work</h2>
            <p className="text-xl mb-16 w-full">{works}</p>
            <div class="grid gap-4 grid-cols-1 md:grid-cols-2">
                {
                    work.map(item => Program(programs[item]))
                }
            </div>
        </div>
      </section>
  </Layout>
}

export const Head = ({ pageContext }) => <Seo 
    title={`${pageContext.first} ${pageContext.last}`} 
    description={pageContext.biography} 
    image={pageContext.photo} />

export default Team
