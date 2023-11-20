import React from 'react'
import { useRouter } from 'next/router'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { Footer } from './src/components/footer'

const config: DocsThemeConfig = {
  darkMode: true,
  nextThemes: {
    defaultTheme: "dark",
  },
  logo: <span>John Deniel</span>,
  project: {
    link: 'https://github.com/johndeniel',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/johndeniel',
  useNextSeoProps() {
    const { route } = useRouter()
    if (route !== '/') {
      return {
        titleTemplate: '%s – johndeniel'
      }
    }
  },
  head: function useHead() {
    return (
      <>
        {/* Favicons, meta */}
        <link
          href="./src/public/favicon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="./src/public/favicon.png"
          rel="icon"
          sizes="512x512"
          type="image/png"
        />
        <link
          href="./src/public/favicon.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link href="./src/public/site.webmanifest" rel="manifest" />
        <link
          color="#000000"
          href="./src/public/favicon.png"
          rel="mask-icon"
        />
        <meta content="en" httpEquiv="Content-Language" />
      </>
    );
  },
  footer: {
    component: Footer,
  },
  editLink: {
    text: 'Edit this page on GitHub →'
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback'
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  toc: {
    backToTop: true
  }
}

export default config
