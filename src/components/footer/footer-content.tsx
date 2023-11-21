import navigation from './navigation'
import FooterLink from './footer-link'
import SubmitForm from './submit-form'
import FooterHeader from './footer-header' 
import { useTurboSite } from "./siteSwitcher"
import type { TurboSite } from "./siteSwitcher"

export function FooterContent() {
  const site: TurboSite = useTurboSite() as TurboSite;
  return (
    <div aria-labelledby="footer-heading" className="w-full">
      <h2 className="sr-only" id="footer-heading">
        Footer
      </h2>
      <div className="w-full py-8 mx-auto">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-1 gap-8 xl:col-span-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 md:gap-8">
              <div className="mt-12 md:!mt-0">
                <FooterHeader>Resources</FooterHeader>
                <ul className="mt-4 space-y-1.5 list-none ml-0" role="list">
                  {navigation.general.map((item) => (
                    <li key={item.name}>
                      <FooterLink href={item.href}>{item.name}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:!mt-0">
                <FooterHeader>Skylark</FooterHeader>
                <ul className="mt-4 space-y-1.5 list-none ml-0" role="list">
                  {navigation.repo.map((item) => (
                    <li key={item.name}>
                      <FooterLink href={item.href}>{item.name}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:!mt-0">
                <FooterHeader>Technology</FooterHeader>
                <ul className="mt-4 space-y-1.5 list-none ml-0" role="list">
                  {navigation.pack.map((item) => (
                    <li key={item.name}>
                      <FooterLink href={item.href}>{item.name}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:!mt-0">
                <FooterHeader>Company</FooterHeader>
                <ul className="mt-4 space-y-1.5 list-none ml-0" role="list">
                  {navigation.company(site).map((item) => (
                    <li key={item.name}>
                      <FooterLink href={item.href}>{item.name}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:!mt-0">
                <FooterHeader>Legal</FooterHeader>
                <ul className="mt-4 space-y-1.5 list-none ml-0" role="list">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <FooterLink href={item.href}>{item.name}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:!mt-0">
                <FooterHeader>Support</FooterHeader>
                <ul className="mt-4 space-y-1.5 list-none ml-0" role="list">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <FooterLink href={item.href}>{item.name}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 xl:!mt-0">
            <FooterHeader>Subscribe to our newsletter</FooterHeader>
            <p className="mt-4 text-sm text-gray-600 dark:text-[#888888]">
              Subscribe to the Skylark newsletter and stay updated on new releases
              and features, guides, and case studies.
            </p>
            <SubmitForm />
          </div>
        </div>
        <div className="pt-8 mt-8 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="mt-4 text-xs text-gray-500 dark:text-[#888888]">
              &copy; {new Date().getFullYear()} John Deniel, Inc. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterContent