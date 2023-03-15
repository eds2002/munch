import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Lora } from 'next/font/google'
import { Stick_No_Bills, Rampart_One, Luckiest_Guy } from 'next/font/google'
const lora = Lora({
  subsets: ['latin'],
})
const stickNoBills = Stick_No_Bills({
  subsets: ['latin'],
})
const ramportOne = Rampart_One({
  weight: ['400'],
  subsets: ['latin'],
})

const luckiestGuy = Luckiest_Guy({
  weight: ['400'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --lora-font: ${lora.style.fontFamily};
            --stick-no-bills-font: ${stickNoBills.style.fontFamily};
            --ramport-one-font: ${ramportOne.style.fontFamily};
            --luckiest-guy-font: ${luckiestGuy.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  )
}
