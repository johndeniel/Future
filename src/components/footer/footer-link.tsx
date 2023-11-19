import Link from "next/link"
import type { ReactNode } from "react"

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  const classes =
    "text-sm text-[#666666] dark:text-[#888888] no-underline betterhover:hover:text-gray-700 betterhover:hover:dark:text-white transition";
  if (href.startsWith("http")) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    )
  }
  return (
    <Link className={classes} href={href}>
      {children}
    </Link>
  )
}

export default FooterLink