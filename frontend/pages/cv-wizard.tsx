import { NextPage } from "next";
import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "@/components/Header";

import PersonalDetails from "./personal-details";
import WorkDetails from "./work-details";
import EducationalDetails from "./educational-details";
import Skills from "./skills";
import { Viewer, Worker } from "@react-pdf-viewer/core";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const CvWizard: NextPage = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState({});

  let _next = (fData: any) => {
    if (currentStep >= 3) {
      setCurrentStep(4);
    } else {
      setCurrentStep(currentStep + 1);
    }

    setData({ ...data, ...fData });
  };

  let _prev = () => {
    if (currentStep <= 1) {
      setCurrentStep(1);
    } else {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <>
      <Head>
        <title>CV Wizard | Resume Generator</title>
        <meta name="description" content="Login to Create your own Resume" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header isHome={false} />

      <div className="h-[calc(100vh-120px)] mt-[120px]">
        <div
          className="w-[80%] h-[90%] bg-white  relative top-[50%] left-[50%] px-8 theme-blue theme font-sans"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <div className="h-full grid grid-cols-2 gap-16">
            <div className="overflow-auto h-full shadow-2xl rounded-xl">
              <div className="pb-16">
                <div>
                  <PersonalDetails
                    currentStep={currentStep}
                    _prev={_prev}
                    _afterValid={_next}
                  />
                  <WorkDetails
                    currentStep={currentStep}
                    _prev={_prev}
                    _afterValid={_next}
                  />
                  <EducationalDetails
                    currentStep={currentStep}
                    _prev={_prev}
                    _afterValid={_next}
                  />
                  <Skills
                    currentStep={currentStep}
                    _prev={_prev}
                    _afterValid={_next}
                  />
                </div>
              </div>
            </div>
            <div className="overflow-auto h-full">
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.js">
                <div
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <Viewer fileUrl="/cv-sample.pdf" />
                </div>
              </Worker>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CvWizard;
