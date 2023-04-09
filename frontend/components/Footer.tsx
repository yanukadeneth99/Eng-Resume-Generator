import { NextComponentType } from "next";
import Image from "next/image";
import { FaFacebook, FaGoogle, FaApple, FaInstagram } from "react-icons/fa";

// Logo
import RLogo from "../public/images/logo.png";

const Footer: NextComponentType = () => {
  return (
    <div className="bg-primaryBgDark bg-no-repeat bg-center bg-cover bg-footer-texture theme-blue theme">
      <div className="flex w-full">
        <div className="flex-none w-1/4">
          <Image src={RLogo} alt="logo" className="m-10" />
        </div>
        <div className="flex-none w-1/4 mt-14 ps-32">
          <h1 className="text-white mb-6 font-extrabold">Resources</h1>
          <ul>
            <li className="text-[#A5ACBA] mb-2">Community</li>
            <li className="text-[#A5ACBA] mb-2">Events</li>
            <li className="text-[#A5ACBA] mb-2">Help Center</li>
            <li className="text-[#A5ACBA] mb-2">Partners</li>
          </ul>
        </div>
        <div className="flex-none w-1/4 mt-14 ps-32">
          <h1 className="text-white mb-6 font-extrabold">Products</h1>
          <ul>
            <li className="text-[#A5ACBA] mb-2">Integrations</li>
            <li className="text-[#A5ACBA] mb-2">Solutions</li>
            <li className="text-[#A5ACBA] mb-2">Features</li>
            <li className="text-[#A5ACBA] mb-2">Enterprise</li>
          </ul>
        </div>
        <div className="flex-none w-1/4 mt-14 ps-32">
          <h1 className="text-white mb-6">Get Email Notifications</h1>
          <input
            type="email"
            name="email-notif"
            id="email-notif"
            className="p-2 w-3/5 bg-[#184184]"
            placeholder="Enter email..."
          />
          <button
            type="submit"
            className="bg-primary text-white p-2 border-[1px] border-primary rounded-r-lg"
          >
            Submit
          </button>
        </div>
      </div>
      <hr className="w-[95%] mx-auto mt-4" />
      <div className="flex justify-between w-[95%] mx-auto pt-2 pb-4">
        <span className="flex-none text-[#A5ACBA]">
          © 2023 All Rights Reserved.
        </span>
        <div className="flex-none">
          <div className="flex flex-row">
            <FaFacebook color="white" className="text-[1.8rem] ms-6"/>
            <FaGoogle color="white" className="text-[1.8rem] ms-6"/>
            <FaApple color="white" className="text-[1.8rem] ms-6"/>
            <FaInstagram color="white" className="text-[1.8rem] ms-6"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
