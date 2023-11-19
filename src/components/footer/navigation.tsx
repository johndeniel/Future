import type { TurboSite } from "./siteSwitcher";

const navigation = {
  general: [
    { name: "Rust", href: "https://www.rust-lang.org" },
    { name: "TypeScript", href: "https://www.typescriptlang.org" },
  ],
  repo: [
    { name: "Skylark Web", href: "https://skylark-web.vercel.app" },
    { name: "Skylark Docs", href: "https://skylark-docs.vercel.app" },
  ],
  pack: [
    { name: "Docker Hub", href: "https://hub.docker.com/u/johndeniel" },
    { name: "Clerk", href: "https://clerk.com" },
    { name: "Turborepo", href: "https://turbo.build/repo" },
    { name: "Stripe", href: "https://stripe.com" },
  ],
  support: [
    {
      name: "GitHub",
      href: "https://github.com/johndeniel/Skylark",
    },
    {
      name: "Discord",
      href: "https://discord.com",
    },
  ],
  company: (site: TurboSite) => [
    {
      name: "Vercel",
      href: "https://vercel.com"
    },
    {
      name: "AWS",
      href: "https://aws.amazon.com",
    },

  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export default navigation