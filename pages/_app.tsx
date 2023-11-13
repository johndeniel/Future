import '@styles/globals.css'
import 'nextra-theme-docs/style.css'
import localFont from "next/font/local"
import { Inter as FontSans } from "next/font/google"
import {cn} from '../lib/utils'


const fontHeading = localFont({
  src: "../fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
})

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})


export default function MyApp({ Component, pageProps }) {
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
  );
}
