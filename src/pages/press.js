import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

function PressPage() {
    const releases = require('../../data/general.json').press

  return (
    <Layout>
        <section>
            <div
            class="mx-auto max-w-screen-xl px-4 py-48 lg:flex  lg:items-center"
            >
                <div class="mx-auto max-w-4xl text-center">
                    <h1 class="text-3xl font-extrabold sm:text-5xl">
                        Press and Media
                    </h1>

                    <p class="mt-4 text-lg">
                        Here, you can see a collection of our press releases, media comments, and other public facing statements that the FPA has made since our inception.
                    </p>

                </div>
            </div>
        </section>
        <section>
            <div className="max-w-6xl mx-auto pb-16 px-4 flex">
                <div class="space-y-4 w-full">
                    <ul>
                        { 
                            releases.map(item => <li class="list-disc mb-4"><a class="text-sky-400 hover:text-sky-500 hover:underline" href={item.path}>{item.name}</a></li>)
                        }
                    </ul>
                </div>
            </div>
        </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Press and Media" />

export default PressPage
