import React from 'react'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'


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
        titleTemplate: '%s – MyMusic API Docs'
      }
    }
  },
  head: function useHead() {
    const { title } = useConfig()
    const { route } = useRouter()
    const socialCard =
			route === "/" || !title
				? `${process.env.BASE_URL}/og.png`
				: `${process.env.BASE_URL}/api/og?title=${title}`;

    return (
      <>
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <meta name="og:title" content={`${title} - MyMusic API Docs`} />
        <meta name="description" content={`${title} - Discover MyMusic API Docs`} />
        <meta name="og:description" content={`${title} - Discover MyMusic API Docs`} />
        <meta name="og:image" content={socialCard} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site:domain" content={process.env.SITE_URL} />
        <meta name="twitter:site" content={process.env.SITE_URL} />
        <meta name="twitter:url" content={process.env.BASE_URL} />
        <meta name="twitter:image" content={socialCard} />

        <meta name="apple-mobile-web-app-title" content="MyMusic" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      </>
    )
  }
}

export default config