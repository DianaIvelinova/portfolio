import Head from "next/head";
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Portfolio created by Diyana Ivanova " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/portfolio.svg" />
      </Head>
      <Header/>
      <Profile/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}
