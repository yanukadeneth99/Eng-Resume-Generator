import { NextComponentType } from "next";
import Image from "next/image";

const OurServices: NextComponentType = () => {
  return (
    <div id="services" className="theme-blue theme w-[80vw] mx-auto font-sans">
      <h1 className="text-6xl mt-6 text-primary font-bold">Our Services</h1>
      <div className="flex">
        <div className="flex-none w-2/5">
          <Image
            src={"/images/services.png"}
            width={500}
            height={500}
            alt="Services"
          />
        </div>
        <div className="flex-none w-3/5">
          <p className="mt-5 text-[20px]">
            Looking for a way to showcase your skills and projects as an
            engineer or developer? Look no further than our user-friendly
            platform. Our innovative approach to CV generation allows you to
            easily input your information and generate a visually stunning and
            professional CV to help you stand out from the crowd.
          </p>
          <p className="mt-5 text-[20px]">
            Our platform is designed specifically with engineers and developers
            in mind, ensuring that your CV accurately highlights your unique
            skill set and achievements. With a range of customizable templates
            and easy-to-use design tools, you can create a CV that truly
            represents you and your experience.
          </p>
          <p className="mt-5 text-[20px]">
            Don&apos;t let generic CV formats hold you back any longer. Join the many
            satisfied users who have already created standout CVs with our web
            application. Start generating your professional CV today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
