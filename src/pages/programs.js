import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Program from "../components/program"

function ProgramsPage() {

  let generalData = require('../../data/general.json')
  let programData = require('../../data/programs.json')
  let impactCount = generalData.impact.adults + generalData.impact.children;
  let programs = programData.programs;

  return (
    <Layout>
      <section>
        <div
          class="mx-auto max-w-screen-xl px-4 py-48 lg:flex  lg:items-center"
        >
          <div class="mx-auto max-w-4xl text-center">
            <h1 class="text-3xl font-extrabold sm:text-5xl">
            We offer dozens of different programs to help achieve our mission.
            </h1>

            <p class="mt-4 text-lg">
              To help achieve our mission of teaching everyone in the world how to program, we run dozens of different programs, ranging from open-source projects, partnerships, in-person events, and more. To help maintain these programs and projects, we rely on volunteers and the money provided by sponsors and donors.
            </p>

            <div class="mt-8 flex flex-wrap justify-center gap-4">
              <a
                class="block w-full rounded bg-active px-12 py-3 text-sm font-medium text-white shadow hover:bg-active focus:outline-none focus:ring active:bg-active sm:w-auto"
                href="/support"
              >
                Support
              </a>

              <a
                class="block w-full rounded px-12 py-3 text-sm font-medium text-active shadow hover:text-active focus:outline-none focus:ring active:text-active sm:w-auto"
                href="/impact"
              >
                Our Impact
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="mx-auto max-w-screen-xl px-4 py-4">
          <h2 className="font-bold text-4xl mb-4">Programs</h2>
          <p className="text-xl mb-16 max-w-2xl">{programData.description}</p>
          <div class="grid gap-4 grid-cols-1 md:grid-cols-2">
            {
                programs.map(item => Program(item))
            }
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Programs" />

export default ProgramsPage
