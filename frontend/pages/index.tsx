import Head from "next/head";
import { NextPage } from "next";

// Components
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OurServices from "@/components/OurServices";
import CustomerFeedbacks from "@/components/CustomerFeedbacks";
import ContactUs from "@/components/ContactUs";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* First Section */}
      <Hero />
      <OurServices />
      <hr className="w-[70vw] mx-auto border-2 border-[#d9d9d9]" />
      <CustomerFeedbacks />
      <ContactUs />
      <FAQ />
      <Footer />
    </>
  );
};

export default Home;
