import { NextComponentType } from "next";
import Image from "next/image";

import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

const Hero: NextComponentType = () => {
  const { isAuthenticated, checkAuthenticated } = useAuth();
  useEffect(() => {
    checkAuthenticated();
  }, []);

  return (
    <div className="mt-[120px] relative bg-primaryBg theme-blue theme w-full h-full">
      <Image
        priority
        src="/images/shapes/shape1.svg"
        height={417}
        width={108}
        alt={"shape 1"}
        className="absolute left-0"
        style={{ top: "-20px" }}
      />
      <Image
        priority
        src="/images/shapes/shape2.svg"
        height={417}
        width={131}
        alt={"shape 1"}
        className="absolute right-0"
        style={{ transform: "translate(0%, 20%)" }}
      />
      <Image
        priority
        src="/images/shapes/shape3.svg"
        height={65}
        width={351}
        alt={"shape 1"}
        className="absolute bottom-0 left-[50%]"
        style={{ transform: "translate(-40%, 0%)" }}
      />
      <div className="px-28">
        <div className="flex w-11/12 mx-auto">
          <div className="flex flex-col items-center w-3/5">
            <h1 className="text-6xl mt-6 font-sans text-primary font-bold">
              Build the resume that lands you jobs
            </h1>
            <p className="text-justify text-[20px] mt-10 pe-20">
              Looking for a way to showcase your skills and projects as an
              engineer or developer? Look no further than our user-friendly
              platform. Our innovative approach to CV generation allows you to
              easily input your information and generate a visually stunning and
              professional CV to help you stand out from the crowd.{" "}
            </p>
            <p className="text-justify text-[20px] mt-5 pe-20">
              Our platform is designed specifically with engineers and
              developers in mind, ensuring that your CV accurately highlights
              your unique skill set and achievements. With a range of
              customizable templates and easy-to-use design tools, you can
              create a CV that truly represents you and your experience.{" "}
            </p>
            <p className="text-justify text-[20px] mt-5 pe-20">
              Don&apos;t let generic CV formats hold you back any longer. Join
              the many satisfied users who have already created standout CVs
              with our web application. Start generating your professional CV
              today!
            </p>
            {isAuthenticated ? (
              <button className="bg-[#FF0000] border-2 border-[#FF0000] text-white rounded-full w-64 py-2 uppercase my-12">
                Dashboard
              </button>
            ) : (
              <button className="bg-primary border-2 border-primary text-white rounded-full w-64 py-2 uppercase my-12">
                Get Started
              </button>
            )}
          </div>
          <div className="flex-none w-2/5">
            <Image
              priority
              src="/images/Group 2018.png"
              height={659}
              width={450}
              alt={"CVs"}
              style={{ maxWidth: "400px" }}
              className="mx-auto mt-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
