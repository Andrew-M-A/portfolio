import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Hero from '@/components/Hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-sky-900 text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Andrew&apos;s Portfolio</title>
      </Head>

      <Header/>

      {/* Hero */}
      <section id="hero">
      <Hero/>
      </section>

      {/* About */}

      {/* Experience */}

      {/* Skills */}

      {/* Project */}

      {/* Contact  */}



    </div>
  )
}
