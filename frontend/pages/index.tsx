import Head from "next/head";
import { NextPage } from "next";

// Components
import Header from "@/components/Header";
import Hero from "@/components/Hero";

const Home: NextPage = () => {
  return (
    <>
      {/* Meta Tags */}
      <Head>
        <title>Resume Generator</title>
        <meta
          name="description"
          content="Generate your resumes for developers free online"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* First Section */}
      <Hero />
    </>
  );
};

export default Home;
