import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

function MissionPage({data,location}) {
  let generalData = require('../../data/general.json')

  return (
    <Layout location={location} crumbLabel="mission">
      <section>
        <div
          class="mx-auto max-w-screen-xl px-4 py-48 lg:flex  lg:items-center"
        >
          <div class="mx-auto max-w-4xl text-center">
            <h1 class="text-3xl font-extrabold sm:text-5xl">
              We're on a mission to teach everyone in the world to program.
            </h1>

            <p class="mt-4 text-lg">
              {/*We offer dozens of different programs, all directed towards teaching children and adults how to program and make the most of the technology that surrounds us. Our efforts include corporate partnerships, school and university charters, digital resources, and support for the open-source ecosystem.*/}
              The Fairfield Programming Association (FPA) is a student-run non-profit organization dedicated to providing youth with computer science educational opportunities. As the technology industry grows and to encapsulate every facet of our day to day life, computer literacy becomes more of a necessity to thrive. Computer science teaches analytical thinking and problem solving, skills which are imperative to any student’s success. The mission of the FPA is to advance computer literacy and provide underserved students of all ages the resources necessary to rise as our next generation of engineers. The FPA strives to pass on the passion we have for computer science to our students, allowing that passion to blossom through each students’ career.
            </p>

            <div class="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                class="block w-full rounded bg-active px-12 py-3 text-sm font-medium text-white shadow hover:bg-active focus:outline-none focus:ring active:bg-active sm:w-auto"
                to="/support"
              >
                Support
              </Link>

              <Link
                class="block w-full rounded px-12 py-3 text-sm font-medium text-active shadow hover:text-active focus:outline-none focus:ring active:text-active sm:w-auto"
                to="/impact"
              >
                Our Impact
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-active px-4 py-16">
        <div className="max-w-6xl mx-auto px-4 flex gap-4">
          <div className="w-full md:w-2/3">
            <h2 className="font-bold text-white text-4xl mb-4">The One Student Promise.</h2>
            {generalData.mission?.oneStudentPromise?.map(text => <p className="mb-2 text-white text-md">{text}</p>)}
            <div className="mt-8">
              <Link className="text-lg text-white underline" to="/support">Learn More About What Your Support Does</Link>
            </div>
          </div>
          <div className="w-1/3 hidden text-slate-200 md:block">
            <img className="w-full rounded" src={`/${generalData.images?.general[0].src}`} alt={generalData.images?.general[0].alt} />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Mission" breadcrumbs={{ "Home": "https://about.fairfieldprogramming.org/", "Mission": "https://about.fairfieldprogramming.org/mission" }} />

export default MissionPage

