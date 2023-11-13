import React from 'react'
import { useRouter } from 'next/router'
import  { Footer } from  './components/footer/footer'


const config = {
  logo: <span>John Deniel</span>,
  project: {
    link: 'https://github.com/johndeniel',
  },
  search: {
    placeholder: "Search..."
  },
  banner: {
    key: 'banner',
    text: (
      <a href="/">
        🎉 John Deniel 1.0 is released. Read more →
      </a>
    )
  },
  useNextSeoProps() {
    const { route } = useRouter()
    if (route !== '/') {
      return {
        titleTemplate: '%s – johndeniel'
      }
    }
  },
  footer: {
    component: Footer,
  }
}

export default config