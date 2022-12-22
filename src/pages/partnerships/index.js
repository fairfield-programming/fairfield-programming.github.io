import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

function Partner({ title, slug, description }) {

  return <a className="block w-full h-full" href={`/partnerships/${slug}`}>
    <div className="rounded shadow p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-md">{description || ""}</p>
    </div>
  </a>

}

function MissionPage() {
  let generalData = require('../../../data/general.json')
  let partnerData = require('../../../data/partners.json')

  return (
    <Layout>
      <section>
        <div
          class="mx-auto max-w-screen-xl px-4 py-48 lg:flex  lg:items-center"
        >
          <div class="mx-auto max-w-4xl text-center">
            <h1 class="text-3xl font-extrabold sm:text-5xl">
            We partner with companies globally to make our mission into reality.
            </h1>

            <p class="mt-4 text-lg">
              See all of our international partners and collaborators who help take the mission of the Fairfield Programming Association and make it material. If you would like to contact us about a possible partnership opportunity, please see the 'Become a Partner' page.
            </p>

            <div class="mt-8 flex flex-wrap justify-center gap-4">
              <a
                class="block w-full rounded bg-active px-12 py-3 text-sm font-medium text-white shadow hover:bg-active focus:outline-none focus:ring active:bg-active sm:w-auto"
                href="/partnerships/partner"
              >
                Become a Partner
              </a>

              <a
                class="block w-full rounded px-12 py-3 text-sm font-medium text-active shadow hover:text-active focus:outline-none focus:ring active:text-active sm:w-auto"
                href="/partnerships/#about"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-6xl mx-auto pb-16 px-4 flex">
          <div className="w-2/3">
            <h2 className="font-bold text-4xl mb-4" id="about">Our Partners</h2>
            {partnerData.description?.map(text => <p className="mb-2 text-lg">{text}</p>)}
          </div>
        </div>
      </section>
      <section>
        <div class="mx-auto max-w-screen-xl px-4 py-4">
          <div class="grid gap-4 grid-cols-1 md:grid-cols-2">
            {
                partnerData.partners.map(item => Partner(item))
            }
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Mission" />

export default MissionPage
