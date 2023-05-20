import { NextComponentType } from "next";
import Image from "next/image";

const CustomerFeedbacks: NextComponentType = () => {
  return (
    <div id="customers" className="font-sans w-[70vw] mx-auto mb-6 pb-20">
      <h1 className="text-center text-3xl my-10 font-bold text-[#20325B] mt-20">
        What Our Custmers Say
      </h1>
      <div className="flex">
        <div className="flex-none w-4/12 p-6">
          <Image
            src={"/images/Rating.png"}
            width={120}
            height={24}
            alt="Ratings"
          />
          <p className="mt-6 text-[20px]">
            It fits our needs perfectly. Very help full and really good
            experience to create professional resume.
          </p>
          <div className="flex mt-6">
            <div className="flex-none">
              <Image
                src={"/images/customers/Dana.png"}
                width={48}
                height={48}
                alt="Customer"
              />
            </div>
            <div className="flex-col">
              <p className="ms-2">Dana Jones</p>
              <p className="ms-2 text-[#5F6D7E]">UI/UX</p>
            </div>
          </div>
        </div>
        <div className="flex-none w-4/12 p-6">
          <Image
            src={"/images/Rating.png"}
            width={120}
            height={24}
            alt="Ratings"
          />
          <p className="mt-6 text-[20px]">
            Very help full and really good experience to create professional
            resume.
          </p>
          <div className="flex mt-6">
            <div className="flex-none">
              <Image
                src={"/images/customers/John.png"}
                width={48}
                height={48}
                alt="Customer"
              />
            </div>
            <div className="flex-col">
              <p className="ms-2">Morgan John</p>
              <p className="ms-2 text-[#5F6D7E]">Software Engineer</p>
            </div>
          </div>
        </div>
        <div className="flex-none w-4/12 p-6">
          <Image
            src={"/images/Rating.png"}
            width={120}
            height={24}
            alt="Ratings"
          />
          <p className="mt-6 text-[20px]">
            It fits our needs perfectly. Very help full and really good
            experience to create professional resume.
          </p>
          <div className="flex mt-6">
            <div className="flex-none">
              <Image
                src={"/images/customers/Olivia.png"}
                width={48}
                height={48}
                alt="Customer"
              />
            </div>
            <div className="flex-col">
              <p className="ms-2">Olivia Manson</p>
              <p className="ms-2 text-[#5F6D7E]">System Architect</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerFeedbacks;
