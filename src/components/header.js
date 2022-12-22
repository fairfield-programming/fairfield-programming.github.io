import * as React from "react"
import { Link } from "gatsby"

import Logo from "../res/fpa.svg";

const Header = ({  }) => (
  <header aria-label="Site Header" class="shadow-sm">
    <div class="mx-auto max-w-screen-xl p-2">
      <div class="flex items-center justify-center">
        <a class="m-0 p-0" href="/">
          <img class="h-16 m-0" src={Logo} alt="The Fairfield Programming Association Logo" />
        </a>
      </div>
      <div class="flex items-center justify-center gap-4 lg:gap-10">
        <nav
          aria-label="Site Nav"
          class="w-min gap-4 text-sm font-medium flex md:gap-8"
        >
          <a class="text-gray-500 no-underline" href="/mission">Mission</a>
          <a class="text-gray-500 no-underline" href="/impact">Impact</a>
          <a class="text-gray-500 no-underline" href="/programs">Programs</a>
          <a class="text-gray-500 no-underline" href="/partnerships">Partnerships</a>
          <a class="text-gray-500 no-underline" href="/support">Support</a>
        </nav>
      </div>
    </div>
  </header>

)

export default Header
