import type { ReactNode } from "react"

function FooterHeader({ children }: { children: ReactNode }) {
  return <h3 className="text-sm text-black dark:text-white">{children}</h3>
}

export default FooterHeader