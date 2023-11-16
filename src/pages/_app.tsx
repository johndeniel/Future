import '../lib/globals.css'
import {cn} from '../lib/utils'
import localFont from "next/font/local"
import { Inter as FontSans } from "next/font/google"

const fontHeading = localFont({
  src: "../lib/CalSans-SemiBold.woff2",
  variable: "--font-heading",
})

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function Future({ Component, pageProps }) {
  return (
    <main 
      className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable,
        fontHeading.variable
      )}
    >
      <Component {...pageProps} />
    </main>
  )
}