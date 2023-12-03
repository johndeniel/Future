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
    link: 'https://github.com/johndeniel/Future',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/johndeniel/Future/tree/main',
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
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
    
        <link rel="icon" href="/favicon.png" type="image/png" />
      </>
    )
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
  },
  footer: {
    component: Footer,
  }
}

export default config