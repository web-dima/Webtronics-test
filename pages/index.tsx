import Head from 'next/head'
import {NextPage} from "next";
import Header from "../components/Header"
import Hero from "../components/Hero";
import Decor from "../UI/Decor";
import About from "../components/About";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Webtronics</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className="background-wrapper">
            {/*<div className="star-wrapper">*/}
                <div className="container">
                    <Decor />
                    <Header/>
                    <Hero/>
                    <About />
                </div>
            {/*</div>*/}
        </div>
    </>
  )
}

export default Home