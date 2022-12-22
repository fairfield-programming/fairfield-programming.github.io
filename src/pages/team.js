import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Person from "../components/person"

function ProgramsPage() {

  const [ search, setSearch ] = React.useState("");

  let generalData = require('../../data/general.json')
  let teamMembers = require('../../data/team.json')

  return (
    <Layout>
      <section>
        <div class="mx-auto max-w-screen-xl px-4 py-16">
          <h2 className="font-bold text-4xl mb-4">Our Team</h2>
          <p className="text-xl mb-4 max-w-2xl">To be as transparent as possible, we allow anyone to access information for all of our team members. If you would like to join the team, please see the programs page for more information.</p>
          <input value={search} onChange={(e) => { setSearch(e.target.value) }} type="search" class="bg-slate-100 p-4 w-full rounded shadow mb-16" placeholder="John Doe"></input>
          <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {
                teamMembers.filter(member => `${member.first} ${member.last}`.includes(search)).map(item => Person(item))
            }
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Programs" />

export default ProgramsPage
