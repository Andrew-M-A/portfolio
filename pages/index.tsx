import Head from 'next/head'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Andrew&apos;s Portfolio</title>
      </Head>
      <main>
        <div>
          <h1 className='text-red-500'> Currently: Building a cool portfolio </h1>
        </div>
      </main>
    </>
  )
}
