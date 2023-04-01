import About from '@/components/About'
import Hero from '@/components/Hero'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Yochi</title>
        <meta name="description" content="יוכי עקיבא מגע מרפא" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://res.cloudinary.com/arikxl/image/upload/v1677880958/Ella2023/ly6lss9qgwooyvq95vil.png" />
      </Head>
      <main >
        <Hero />
        <About />
      </main>
    </>
  )
}
