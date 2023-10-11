import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '@/Components/Navbar/navbar'
import Footer from '@/Components/Navbar/footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='min-w-[100vw]'>
      <Navbar/>
      <div className='flex justify-center w-full min-w-[100vw]'><div className=' max-w-[1600px] w-full'><Component {...pageProps} /></div></div>
      <Footer/>
    </div>
  )
}
