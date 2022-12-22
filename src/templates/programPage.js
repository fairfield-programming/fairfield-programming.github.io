import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Person from "../components/person"
import Markdown from "../components/markdown"

const SectionBanner = ({ context }) => {

    const { title, description } = context;

    return <section>
        <div class="mx-auto max-w-screen-xl px-4 py-16">
            {/* <span>Since {new Date(since).toLocaleString('default', { month: 'long' })}, {new Date(since).getFullYear()}</span> */}
            <h1 className="font-bold text-4xl mb-4">{title}</h1>
            <p className="text-xl mb-16 max-w-2xl">{description}</p>
        </div>
    </section>

}

const SectionMarkdown = ({ context, section }) => {

    let { content } = section;
    
    if (Array.isArray(content)) content = content.join('\n');

    return <section>
        <div class="mx-auto max-w-screen-xl px-4">
            <Markdown data={content} />
        </div>
    </section>

}

const SectionCode = ({ context, section }) => {

    let { title, content } = section;
    
    if (Array.isArray(content)) content = content.join('\n');

    return <section>
        <div class="mx-auto max-w-screen-xl px-4 py-16">
            <h2 className="font-bold text-4xl mb-4">{title}</h2>
            <code class="block p-4 rounded" dangerouslySetInnerHTML={{ __html: content.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>') }} />
        </div>
    </section>

}

const Program = ({ pageContext }) => {

    const { program, content } = pageContext;

  return <Layout>
    {content.map(section => {

        if (section.type == "banner") return <SectionBanner context={pageContext} section={section} />
        if (section.type == "markdown") return <SectionMarkdown context={pageContext} section={section} />
        if (section.type == "code") return <SectionCode context={pageContext} section={section} />

    })}
  </Layout> 
}

export const Head = ({ pageContext }) => <Seo 
    title={`${pageContext.title}`} 
    description={pageContext.description} />

export default Program
