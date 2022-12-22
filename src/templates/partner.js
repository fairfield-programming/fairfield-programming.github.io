import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Person from "../components/person"

const Partner = ({ pageContext }) => {

    const { title, description, website, what, why, how, since } = pageContext;

  return <Layout>
    <section>
        <div class="mx-auto max-w-screen-xl px-4 py-16"> 
            <span>Since {new Date(since).toLocaleString('default', { month: 'long' })}, {new Date(since).getFullYear()} - <a href={website} className="text-sky-400 hover:text-sky-500 hover:underline">{title} Website</a></span>
            <h1 className="font-bold text-4xl mb-4">{title}</h1>
            <p className="text-xl mb-16 max-w-2xl">{description}</p>

            {/* 'What is the Partnership?' Section */}
            {
                what && <>
                    <h2 className="font-bold text-3xl mb-4">What does our partnership with {title} do?</h2>
                    <p className="text-xl mb-16">{what}</p>
                </>
            }

            {/* 'Why the Partner?' Section */}
            {
                why && <>
                    <h2 className="font-bold text-3xl mb-4">Why did we partner with {title}?</h2>
                    <p className="text-xl mb-16">{why}</p>
                </>
            }

            {/* 'How does the Partner help?' Section */}
            {
                how && <>
                    <h2 className="font-bold text-3xl mb-4">How does {title} help our mission?</h2>
                    <p className="text-xl mb-16">{how}</p>
                </>
            }

        </div>
      </section>
  </Layout> 
}

export const Head = ({ pageContext }) => <Seo 
    title={`${pageContext.title}`} 
    description={pageContext.description} />

export default Partner
