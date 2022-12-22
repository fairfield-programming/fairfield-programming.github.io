import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

function IndexPage() {

  let generalData = require('../../data/general.json')
  let impactCount = generalData.impact.adults + generalData.impact.children;

  return (
    <Layout>
      <section>
        <div
          class="mx-auto max-w-screen-xl px-4 py-48 lg:flex  lg:items-center"
        >
          <div class="mx-auto max-w-xl text-center">
            <h1 class="text-3xl font-extrabold sm:text-5xl">
            With Your Help,
              <strong class="font-extrabold text-active sm:block">
                &nbsp;Everyone Can Learn.
              </strong>
            </h1>

            <p class="mt-4 sm:text-xl sm:leading-relaxed">
              Giving is the biggest way you can help support the FPA on our mission to teach the world how to code.
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
        <div className="max-w-6xl mx-auto pb-16 px-4 flex">
          <div className="w-full md:w-2/3">
            <h2 className="font-bold text-4xl mb-4">One World. One Mission.</h2>
            {generalData.mission?.description?.map(text => <p className="mb-2 text-lg">{text}</p>)}
            <div className="mt-4">
              <a className="text-lg underline" href="/mission">Learn More About the Mission</a>
            </div>
          </div>
          <div className="w-1/3 hidden md:block">
              <img className="w-full rounded" src={generalData.images?.general[0].src} alt={generalData.images?.general[0].alt} />
          </div>
        </div>
      </section>
      <section className="bg-active w-full px-16 py-8">
        <div class="text-center">
          <h2 className="text-xl uppercase text-white font-bold tracking-wider mb-4">Our Global Impact</h2>
          <p className="text-8xl font-bold text-white">{impactCount.toLocaleString()}</p>
          <p className="text-white">students have learned to program with the FPA since September 2022.</p>
          <a className="block underline text-white mt-4" href="/impact">More About Impact</a>
        </div>
      </section>
      <section className="w-full px-4 py-8 mt-16">
        <div className="max-w-3xl mx-auto mb-8">
          <h2 className="text-4xl max-w-2xl font-bold text-center w-full mb-4 mx-auto">The global education movement isn't possible without you!</h2>
          <p className="text-lg">Do you want to be featured on our homepage? Just tag '{generalData.social.instagram}' an Instagram post where you are helping the cause.</p>
        </div>
        <div className="w-4/5 mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-1">
          {
            generalData.images.instagram.map(item => <a href={item.href || "/"}>
              <img className="rounded h-48 w-full object-cover" src={item.src} alt="A picture featuring people helping with the global education movement." />
            </a>)
          }
        </div>
      </section>
      <section className="bg-white w-full px-16 py-8 flex align-center justify-center">
        <div class="text-center max-w-xl">
          <h2 className="text-xl uppercase text-black font-bold tracking-wider mb-4">From Our President</h2>
          <p className="text-3xl text-black font-light">"I cannot give enough thanks to our sponsors, supporters, and those who believed in us from day one. You are what make the FPA special."</p>
          <p className="text-xl font-black text-black mt-8 uppercase">Neil Chaudhari<br /><b class="text-xl">Co-Founder and President</b></p>
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
