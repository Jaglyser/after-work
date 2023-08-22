import '../styles/globals.css'
import { Playfair_Display as PlayfairDisplay, Inter } from 'next/font/google'
import type { AppProps } from 'next/app'

const playfairDisplay = PlayfairDisplay({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair-display',
})

const inter = Inter({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-playfair-display: ${playfairDisplay.style.fontFamily};
          --font-inter: ${inter.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
