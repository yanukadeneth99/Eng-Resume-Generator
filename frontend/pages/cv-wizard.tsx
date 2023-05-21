import { NextPage } from "next";
import { useEffect, useState } from "react";
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
import { useAuth } from "@/context/AuthContext";
import { RxReload } from "react-icons/rx";
import { FaDownload } from "react-icons/fa";
import PermissionError from "@/components/PermissionError";

const getFormattedDate = () => {
  let date = new Date();

  return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};

const CvWizard: NextPage = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState({});
  const { isAuthenticated, checkAuthenticated } = useAuth();
  const [user, setUser] = useState("");
  const [_time, _setTime] = useState(getFormattedDate());

  useEffect(() => {
    checkAuthenticated();

    setUser(localStorage.getItem("user") || "");
  }, [checkAuthenticated]);

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

  if (isAuthenticated) {
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
                <a
                  href={`${process.env.NEXT_PUBLIC_SERVER_APP}/pdf/generate/${user}/${_time}`}
                >
                  <FaDownload className="bg-primary border-2 z-50 absolute right-[-50px] top-0 cursor-pointer border-primary text-[45px] text-[white] rounded-full w-fit py-2" />
                </a>

                <RxReload
                  className="bg-primary border-2 z-50 absolute right-[-50px] top-[60px] cursor-pointer border-primary text-[45px] text-[white] rounded-full w-fit py-2"
                  onClick={() => _setTime(getFormattedDate())}
                />

                {_time ? (
                  <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.js">
                    <div
                      style={{
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    >
                      <Viewer
                        fileUrl={`${process.env.NEXT_PUBLIC_SERVER_APP}/pdf/generate/${user}/${_time}`}
                      />
                    </div>
                  </Worker>
                ) : (
                  ""
                )}
                <p className="text-center">Last updated: {_time}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <PermissionError />;
  }
};

export default CvWizard;
