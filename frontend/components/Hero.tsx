import { NextComponentType } from "next";

const Hero: NextComponentType = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-3/4 h-full bg-red-500 flex flex-row justify-center items-center">
        {/* Text Section Left */}
        <div className="basis-3/5 bg-blue-500 flex flex-col justify-center items-center p-12 space-y-12">
          {/* Heading */}
          <h1 className="text-5xl font-bold">
            Build the resume that lands you jobs
          </h1>

          {/* Texts */}
          <div className="flex flex-col space-y-8">
            <p>
              Looking for a way to showcase your skills and projects as an
              engineer or developer? Look no further than our user-friendly
              platform. Our innovative approach to CV generation allows you to
              easily input your information and generate a visually stunning and
              professional CV to help you stand out from the crowd.{" "}
            </p>

            <p>
              Our platform is designed specifically with engineers and
              developers in mind, ensuring that your CV accurately highlights
              your unique skill set and achievements. With a range of
              customizable templates and easy-to-use design tools, you can
              create a CV that truly represents you and your experience.
            </p>

            <p>
              Dont let generic CV formats hold you back any longer. Join the
              many satisfied users who have already created standout CVs with
              our web application. Start generating your professional CV today!
            </p>
          </div>
        </div>

        {/* Images Here */}
        <div className="basis-2/5 flex justify-center items-center">
          Images Here
        </div>
      </div>
    </div>
  );
};

export default Hero;
