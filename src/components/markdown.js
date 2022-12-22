/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"

const styles = {
    "h1": "text-3xl font-extrabold sm:text-5xl",
    "h2": "text-2xl font-extrabold sm:text-3xl mt-4 mb-4",
    "h3": "",
    "h4": "",
    "h5": "",
    "p": "text-lg mb-2"
};

const Markdown = ({ data }) => {

    const lines = data.split('\n');

    return lines.map((line) => {

        if (line.startsWith('# ')) return <h1 className={styles["h1"]}>{line.slice(2)}</h1>
        if (line.startsWith('## ')) return <h2 className={styles["h2"]}>{line.slice(3)}</h2>
        if (line.startsWith('### ')) return <h3 className={styles["h3"]}>{line.slice(4)}</h3>
        if (line.startsWith('#### ')) return <h4 className={styles["h4"]}>{line.slice(5)}</h4>
        if (line.startsWith('##### ')) return <h5 className={styles["h5"]}>{line.slice(5)}</h5>

        if (line == "") return;

        return <p className={styles["p"]}>{line}</p>;

    })
}

export default Markdown
