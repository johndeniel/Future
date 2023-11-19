import React from 'react'
import { useRouter } from 'next/router'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { Footer } from './src/components/footer'
import { useConfig } from 'nextra-theme-docs'

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
  head: () => {
    const { asPath, pathname } = useRouter();
    const { frontMatter } = useConfig();

    const ogConfig = {
      title: 'John Deniel',
      description: 'The Virtual DOM Replacement for React',
      author: {
        twitter: 'John Deniel',
      },
      favicon: '/favicon.svg',
    };
    const favicon = String(ogConfig.favicon);
    const title = String(frontMatter.title || ogConfig.title);
    const description = String(frontMatter.description || ogConfig.description);
    const note =
      (frontMatter.date as string | undefined) ?? pathname === '/'
        ? 'million.dev'
        : pathname;
    const canonical = new URL(asPath, 'https://johndeniel.com').toString();

    const ogUrl =
      pathname === '/'
        ? `https://million.dev/default-og.png`
        : `https://million.dev/api/og?title=${title}&description=${description}&note=${note}`;

    return (
      <>
        <meta property="og:url" content={canonical} />
        <link rel="canonical" href={canonical} />

        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta name="twitter:site" content={`@${ogConfig.author.twitter}`} />
        <meta name="twitter:creator" content={`@${ogConfig.author.twitter}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content={ogUrl} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="og:image" content={ogUrl} />

        <link rel="shortcut icon" href={favicon} type="image/svg+xml" />
        <link rel="apple-touch-icon" href={favicon} type="image/svg+xml" />
        <meta name="apple-mobile-web-app-title" content={title} />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
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
