import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Markdown from "../components/markdown"

function ContactPage() {

    const social = require('../../data/general.json').social
    
    return (
        <Layout>
            <section>
                <div
                class="mx-auto max-w-screen-xl px-4 py-48 lg:flex  lg:items-center"
                >
                    <div class="mx-auto max-w-4xl text-center">
                        <h1 class="text-3xl font-extrabold sm:text-5xl">
                            Contact the FPA
                        </h1>
                    </div>
                </div>
            </section>
            <section>
                <div className="max-w-6xl mx-auto pb-16 px-4 flex flex-col">
                    <p className="text-lg">If you would like to contact the FPA, please reach out to contact@fairfieldprogramming.org. Alternatively, if you feel that contact through social media is more appropriate, you can message any of the following accounts:</p>
                    <p className="text-lg font-bold mt-4">Instagram: <a href={`https://instagram.com/${social.instagram}`} className="hover:underline hover:text-sky-500 text-sky-400">{social.instagram}</a></p>
                </div>
            </section>
        </Layout>
    )
}

export const Head = () => <Seo title="Contacting the FPA" />

export default ContactPage
