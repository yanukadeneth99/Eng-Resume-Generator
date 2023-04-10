import { NextComponentType } from "next";
import Image from "next/image";

const ContactUs: NextComponentType = () => {
  return (
    <div className="theme theme-blue flex">
      <div className="w-1/2 flex-none bg-primaryBgDark px-60 py-8">
        <h1 className="text-6xl my-6 text-white">Contact Us</h1>
        <div className="bg-white py-16 px-12 rounded-2xl ">
          <label htmlFor="name" className="">
            Full Name
          </label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            className="w-full border-primary opacity-50 border-[1px] bg-[rgb(0,91,206,5%)] rounded-md mb-6 p-1.5"
          />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border-primary opacity-50 border-[1px] bg-[rgb(0,91,206,5%)] rounded-md mb-6 p-1.5"
          />
          <br />
          <label htmlFor="message">Message</label>
          <br />
          <textarea
            name="message"
            id="message"
            cols={20}
            rows={5}
            className="w-full border-primary opacity-50 border-[1px] bg-[rgb(0,91,206,5%)] rounded-md mb-6 p-1.5"
          ></textarea>
          <br />
          <div className="flex justify-center">
            <button className="text-uppercase bg-primary text-white p-2 px-4 rounded-full">
              <div className="flex flex-column">
                <span className="me-2">Submit</span>
                <Image
                  src={"/images/arrow-right.svg"}
                  width={15}
                  height={15}
                  alt="submit"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex-row bg-primaryBgDark ">
        <div className="flex-none w-3/5 bg-primaryBgShapes py-16 float-right">
          <Image
            src={"/images/ContactUs.png"}
            width={500}
            height={600}
            alt="Contact Us"
            style={{ transform: "translate(-25%, 0%)" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
