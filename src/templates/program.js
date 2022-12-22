import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Person from "../components/person"

const Program = ({ pageContext }) => {

    const { slug, title, description, index, joining, since, contents } = pageContext;
    const members = require('../../data/team.json').filter(member => member.work.includes(index))
    const hasMembers = members.length != 0;

  return <Layout>
    <section>
        <div class="mx-auto max-w-screen-xl px-4 py-16">
            <span>Since {new Date(since).toLocaleString('default', { month: 'long' })}, {new Date(since).getFullYear()}</span>
            <h1 className="font-bold text-4xl mb-4">{title}</h1>
            <p className="text-xl mb-16 max-w-2xl">{description}</p>

            {/* Joining Section */}
            {
                joining && <>
                    <h2 className="font-bold text-3xl mb-4">How to Join</h2>
                    <p className="text-xl mb-16">{joining}</p>
                </>
            }

            {
                contents && contents.map(item => {

                    const title = item.title;
                    const keys = Object.keys(item.contents);

                    return <div className="mb-8">
                        <h2 className="font-bold text-3xl mb-4">{title}</h2>
                        <ul>
                            {keys.map(key => <li>
                                <a class="text-sky-400 hover:text-sky-500 hover:underline text-xl mb-16" href={`/programs/${slug}/${item.contents[key]}`}>{key}</a>
                            </li>)}
                        </ul>
                    </div>

                })
            }

            {/* Members Section */}
            {
                hasMembers && <>
                    <h2 className="font-bold text-3xl mb-4">Members</h2>
                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                        {
                            members.map(member => Person(member))
                        }
                    </div>
                </>
            }
        </div>
      </section>
  </Layout> 
}

export const Head = ({ pageContext }) => <Seo 
    title={`${pageContext.title}`} 
    description={pageContext.description} />

export default Program
