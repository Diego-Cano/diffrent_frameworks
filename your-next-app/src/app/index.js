//Potential imports
// import Head from 'next/head'
// import Header from '../components/Header'
// import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>My first Next App</title>
        <meta name="description" content="My name is Diego Cano" />
      </Head>

      <Header/>

      <main>
        <section>
          <h2>Section 1</h2>
          <p>I am from Venezuela</p>
        </section>
        <section>
          <h2>Section 2</h2>
          <p>I am 24 Years old.</p>
        </section>
       
      </main>

      <Footer/>
    </div>
  )
}
