import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <div className="flex justify-center">
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
        <div className="flex justify-center font-light text-6xl text-gray-500 text-opacity-75">
          404
        </div>
        <div className="flex justify-center font-medium text-lg my-2 text-gray-800">The page you're looking for is not found.</div>
        <hr />
        <div className="px-6 py-4">
          Make sure the address is correct. If you think this is a mistake,
          <Link href="/contact" className="ml-1 text-orange-400">contact us</Link>
        </div>
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
