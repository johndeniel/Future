import '@styles/globals.css'
import 'nextra-theme-docs/style.css'
import localFont from "next/font/local"
import { Inter as FontSans } from "next/font/google"


const fontHeading = localFont({
  src: "../fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
})

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})


export default function Nextra({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(
    <Component {...pageProps} />
  )
}

export const font1 = { fontHeading };
export const font2 = { fontSans };