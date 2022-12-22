import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

function MissionPage() {
  let generalData = require('../../../data/general.json')

  return (
    <Layout>
      <section>
        <div
          class="mx-auto max-w-screen-xl px-4 py-48 lg:flex  lg:items-center"
        >
          <div class="mx-auto max-w-4xl text-center">
            <h1 class="text-3xl font-extrabold sm:text-5xl">
            There are so many ways to support us on our mission to teach the world.
            </h1>

            <p class="mt-4 text-lg">
             From donating to spreading awareness to volunteering, there are countless ways you can help move our mission forward. If you represent a corporation or organization, you can even partner with the FPA so that our mission can help your mission.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-active px-4 py-16">
        <div class="flex flex-row gap-4">
            <div class="w-1/3 bg-white rounded p-8">
                <h2 class="text-xl font-black">Donate</h2>
                <p>To donate to the FPA, you can use our <a class="text-sky-400 hover:text-sky-500 hover:underline" href="https://github.com/sponsors/fairfield-programming">Github Sponsors page</a>. All money donated through the Github Sponsors page will be used to advance the mission of the FPA while also tax-exempt.</p>
            </div>
            <div class="w-1/3 bg-white rounded p-8">
                <h2 class="text-xl font-black">Volunteer</h2>
                <p>If you are an individual or group that would like to help work with the FPA, we have <a class="text-sky-400 hover:text-sky-500 hover:underline" href="/programs">dozens of programs</a> that you are able to join. Each project page has instructions about how you can join and start volunteering today.</p>
            </div>
            <div class="w-1/3 bg-white rounded p-8">
                <h2 class="text-xl font-black">Partner</h2>
                <p>If you represent an organization or company, <a class="text-sky-400 hover:text-sky-500 hover:underline" href="/partnerships/partner">please reach out</a>. We are constantly looking for new ideas, resources, and collaborators to help advance the mission so that one day, everyone will be able to code.</p>
            </div>
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Mission" />

export default MissionPage
