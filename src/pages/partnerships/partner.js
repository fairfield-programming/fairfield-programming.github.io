import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

function PartnerPage() {
  let generalData = require('../../../data/general.json')
  let partnerData = require('../../../data/partners.json')

  return (
    <Layout>
      <section>
        <div
          class="mx-auto max-w-screen-xl px-4 py-48 lg:flex  lg:items-center"
        >
          <div class="mx-auto max-w-4xl text-center">
            <h1 class="text-3xl font-extrabold sm:text-5xl">
            Become an FPA Partner Today in a Few Simple Steps 
            </h1>

            <p class="mt-4 text-lg">
              The FPA Partner Program is always looking for new members to join and bring their own views and resources into our mission. If your organization has a partnership proposal, please follow the below steps to submit it. 
            </p>

          </div>
        </div>
      </section>
      <section>
        <div className="max-w-6xl mx-auto pb-16 px-4 flex">
          <div className="w-2/3">
            <h2 className="font-bold text-4xl mb-4">Step One&mdash; Write a Proposal</h2>
            <p class="mt-4 text-lg">
              A proposal for the FPA should be two pages (twelve point font, times new roman, single spaced), and contain three main areas: a description of your organization, a detailed plan of what the partnership would mean/ do, and information about what your organization would provide and what the FPA would need to provide. 
            </p>
            <p class="mt-4 text-lg">
              The size, age, revenue, publicity, etc. of your organization is not important to the FPA. The main determining factor behind us moving forward with a partnership is how well we feel the partnership will mutually benefit our organizations, and how well we feel that the partnership fits with our mission.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-6xl mx-auto pb-16 px-4 flex">
          <div className="w-2/3">
            <h2 className="font-bold text-4xl mb-4">Step Two&mdash; Submit the Proposal and Wait</h2>
            <p class="mt-4 text-lg">
              To submit a proposal to the FPA, first make sure that it fits the above guidelines. If it does, then email a PDF to <code>proposals@fairfieldprogramming.org</code>.
            </p>
            <p class="mt-4 text-lg">
              The proposal process is never quick! It can take us anywhere from a few days to three weeks, to get a proposal read, evaluated, and responded to. The extra length on the proposal process can be due to a number of factors including additional consulting, similar projects already being developed, and team discussions.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-6xl mx-auto pb-16 px-4 flex">
          <div className="w-2/3">
            <h2 className="font-bold text-4xl mb-4">Step Three&mdash; Meetings and Discussions</h2>
            <p class="mt-4 text-lg">
              To make sure that our organizations are on the same page about all of the details and plans in the proposal (and sometimes because not all of the details are included in the proposal), we schedule meetings and discussions. These meetings and discussions start with the proposal evaluators but then soon move to include all the necessary people to make the proposal into a reality.
            </p>
            <p class="mt-4 text-lg">
              We would always love for this meeting process to be fast, and it can be if you respond quickly to emails and have free times available. We know that this is not always the case, and so most partnerships will take around one or two months to move into reality. 
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-6xl mx-auto pb-16 px-4 flex">
          <div className="w-2/3">
            <h2 className="font-bold text-4xl mb-4">Step Four&mdash; Contracts and Legal</h2>
            <p class="mt-4 text-lg">
              For a partnership to be a partnership, it should be formalized with a contract. This contract will be drawn up by your organization and then read over by the FPA legal team. If our legal team agrees to the terms, then your organization will be officially partnered with the FPA.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-6xl mx-auto pb-16 px-4 flex">
          <div className="w-2/3">
            <h2 className="font-bold text-4xl mb-4">Step Five&mdash; Getting it Done</h2>
            <p class="mt-4 text-lg">
              Once partnered with the FPA, we will have several more meetings to get the partnership finalized and into action. From there, the FPA will start fulfilling all of our aspects of the contract, and your organization will be responsible for fulfilling your requirements of the contract.
            </p>
            <p class="mt-4 text-lg">
              If all goes according to plan, the partnership will be complete. We always have meetings after a partnership ends to evaluate what we can do better in the future, and what opportunities we would have to partner again.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Mission" />

export default PartnerPage
