import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Person from "../components/person"

function ProgramsPage({location}) {
  const [search, setSearch] = React.useState("")

  let generalData = require("../../data/general.json")
  let teamMembers = require("../../data/team.json")

  return (
    <Layout location={location} crumbLabel="Team">
      <section>
        <div class="mx-auto max-w-6xl px-4 pb-16 flex flex-col mt-8">
          <h2 className="font-bold text-4xl mb-4">Our Team</h2>
          <p className="text-xl mb-4 max-w-2xl">
            To be as transparent as possible, we allow anyone to access
            information for all of our team members. If you would like to join
            the team, please see the programs page for more information.
          </p>
          {/* <input value={search} onChange={(e) => { setSearch(e.target.value) }} type="search" class="bg-slate-100 p-4 w-full rounded shadow mb-16" placeholder="John Doe"></input> */}
          <div class="flex items-center lg:w-[35rem] w-[20rem]">
            <div class="relative w-full">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search our team.."
                value={search}
                onChange={event => setSearch(event.target.value)}
              />
            </div>
          </div>
          <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-6">
            {teamMembers
              .filter(member =>
                `${member.first} ${member.last}`.toLocaleLowerCase().includes(search)
              )
              .map(item => Person(item))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Our Team" breadcrumbs={{ "Home": "https://about.fairfieldprogramming.org/", "Our Team": "https://about.fairfieldprogramming.org/team" }} />

export default ProgramsPage
