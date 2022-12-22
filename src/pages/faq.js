import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

function PartnerPage() {
  let generalData = require('../../data/general.json')
    const faq = generalData.faq;

  return (
    <Layout>
      <section>
        <div
          class="mx-auto max-w-screen-xl px-4 py-48 lg:flex  lg:items-center"
        >
          <div class="mx-auto max-w-4xl text-center">
            <h1 class="text-3xl font-extrabold sm:text-5xl">
            Frequently Asked Questions
            </h1>

            <p class="mt-4 text-lg">
              Below is a list of frequently asked questions to the FPA and some of the answers that we usually give out. If you have a question that isn't answered below, please contact us.
            </p>

          </div>
        </div>
      </section>
      <section>
        <div className="max-w-6xl mx-auto pb-16 px-4 flex">
            <div class="space-y-4 w-full">
                {
                    faq.map(
                        item => <details class="group w-full [&_summary::-webkit-details-marker]:hidden" open>
                            <summary
                            class="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50"
                            >
                                <h2 class="font-medium text-gray-900">
                                    {item.question}
                                </h2>

                                <svg
                                    class="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </summary>

                            <p class="px-4 mt-4 leading-relaxed text-gray-700">
                                {item.answer}
                            </p>
                        </details>
                    )
                }
                </div>
            </div>
        </section>
    </Layout>
  )
}

export const Head = () => { 

  const generalData = require('../../data/general.json')
  const faq = generalData.faq;

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faq.map(item => {

      return {
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      };

    })
  };

  return <Seo title="Frequently Asked Questions" children={<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqStructuredData)}} />
  </>} />

}

export default PartnerPage
