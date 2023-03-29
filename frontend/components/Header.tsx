import { NextComponentType } from "next";
import Image from "next/image";

// Logo
import RLogo from "../public/images/logo.png";

// Sub Components
import MenuItems from "./Header/MenuItems";

const Header: NextComponentType = () => {
  return (
    // Full Header
    <div className="w-full flex flex-row p-3 shadow-lg">
      {/* Logo 20% */}
      <div className="basis-3/12 flex justify-center items-center">
        <Image src={RLogo} alt="Logo" />
      </div>

      {/* Menu Bar 60% */}
      <div className="basis-6/12 flex justify-center items-center">
        <ul className="w-full flex flex-row justify-start items-center space-x-8">
          <MenuItems />
        </ul>
      </div>

      {/* Buttons 20% */}
      <div className="basis-3/12 flex justify-center items-center space-x-8">
        <button className="bg-blue-500 p-2 px-4">Login</button>
        <button className="bg-blue-500 p-2 px-4">Sign Up</button>
      </div>
    </div>
  );
};

export default Header;
