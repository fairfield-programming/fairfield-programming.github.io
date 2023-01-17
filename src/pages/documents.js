import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

function PressPage({location}) {
    const documents = require('../../data/general.json').documents

  return (
    <Layout location={location} crumbLabel="Documents">
        <section>
            <div
            class="mx-auto max-w-screen-xl px-4 py-48 lg:flex  lg:items-center"
            >
                <div class="mx-auto max-w-4xl text-center">
                    <h1 class="text-3xl font-extrabold sm:text-5xl">
                        Documents
                    </h1>
                    <p class="mt-4 text-lg">
                        Every non-profit has to be as transparent as possible. To do this, we publish our 1023 forms, 990s, and other important legal documentation.
                    </p>
                </div>
            </div>
        </section>
        <section>
            <div className="max-w-6xl mx-auto pb-16 px-4 flex">
                <div class="space-y-4 w-full">
                    <ul>
                        { 
                            documents.map(item => <li class="list-disc mb-4"><a class="text-sky-400 hover:text-sky-500 hover:underline" href={item.path}>{item.name}</a></li>)
                        }
                    </ul>
                </div>
            </div>
        </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Legal Documents" breadcrumbs={{ "Home": "https://about.fairfieldprogramming.org/", "Legal Documents": "https://about.fairfieldprogramming.org/documents" }} />

export default PressPage
