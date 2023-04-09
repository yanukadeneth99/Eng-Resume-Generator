import { NextComponentType } from "next";
import { useState } from "react";
import Image from "next/image";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const FAQ: NextComponentType = () => {
  const [isFAQ1Open, setIsFAQ1Open] = useState(false);
  const [isFAQ2Open, setIsFAQ2Open] = useState(false);
  const [isFAQ3Open, setIsFAQ3Open] = useState(false);
  const [isFAQ4Open, setIsFAQ4Open] = useState(false);
  const [isFAQ5Open, setIsFAQ5Open] = useState(false);

  return (
    <div className="theme-blue theme w-[80vw] mx-auto font-sans mb-20">
      <h1 className="text-6xl mt-6 text-primary">FAQ</h1>
      <div className="flex mt-8">
        <div className="flex-none w-3/5 pe-32">
          <div
            className="border-[1px] p-6 cursor-pointer"
            onClick={() => setIsFAQ1Open(!isFAQ1Open)}
          >
            <div className="flex justify-between">
              Can I add a picture to my Resume?{" "}
              {isFAQ1Open ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {isFAQ1Open && (
              <div className="mt-4 ms-4 text-gray-500">
                - Yes. You can add a picture to your resume.
              </div>
            )}
          </div>

          <div
            className="border-[1px] p-6 cursor-pointer"
            onClick={() => setIsFAQ2Open(!isFAQ2Open)}
          >
            <div className="flex justify-between">
              Is my Resume also available for download in Word?
              {isFAQ2Open ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {isFAQ2Open && (
              <div className="mt-4 ms-4 text-gray-500">
                - Unfortunately, we&apos;re only allowing cv export function to
                export PDFs.
              </div>
            )}
          </div>

          <div
            className="border-[1px] p-6 cursor-pointer"
            onClick={() => setIsFAQ3Open(!isFAQ3Open)}
          >
            <div className="flex justify-between">
              Can I edit my Resume?
              {isFAQ3Open ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {isFAQ3Open && (
              <div className="mt-4 ms-4 text-gray-500">
                - Yes. You can edit already given details and re-generate your
                Resume with the updated information.
              </div>
            )}
          </div>

          <div
            className="border-[1px] p-6 cursor-pointer"
            onClick={() => setIsFAQ4Open(!isFAQ4Open)}
          >
            <div className="flex justify-between">
              Can I sort the Items?
              {isFAQ4Open ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {isFAQ4Open && (
              <div className="mt-4 ms-4 text-gray-500">
                - Yes. You can sort items you have already inserted to the
                system.
              </div>
            )}
          </div>

          <div
            className="border-[1px] p-6 cursor-pointer"
            onClick={() => setIsFAQ5Open(!isFAQ5Open)}
          >
            <div className="flex justify-between">
              Are the items sorted in chronologically?
              {isFAQ5Open ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {isFAQ5Open && (
              <div className="mt-4 ms-4 text-gray-500">
                - Yes. By default, the items you insert into the application is
                stored chronologically. But you can sort them in any order you
                prefer.
              </div>
            )}
          </div>
        </div>
        <div className="flex-none w-2/5">
          <Image
            className="float-right"
            src={"/images/faq.png"}
            width={476}
            height={426}
            alt="faq"
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
