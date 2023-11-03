import Header from "@/components/Header";
import Hero from "@/components/Hero";
import type {NextPage} from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <main >
      <div className = "bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
        <Head>
          <title>Kris' Portfolio</title>
        </Head>
        <h1 className = "text-blue-800">Let's build a portfolio</h1>
        <Header/>

        {/* Hero */}
        <section id="hero" className ="snap-center">
          <Hero/>

        </section>
        {/* About */}
        {/* Experience */}
        {/* Skills */}
        {/* Projects */}
        {/* Contact Me */}
      </div>
    </main>
  )
}
 export default Home