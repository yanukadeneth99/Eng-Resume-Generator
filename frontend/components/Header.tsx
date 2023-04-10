import { NextComponentType } from "next";
import Image from "next/image";
import { useRouter } from "next/router";

// Logo
import RLogo from "../public/images/logo.png";

// Sub Components
import MenuItems from "./Header/MenuItems";

const Header: NextComponentType = () => {
  const router = useRouter();

  return (
    // Full Header
    <div className="w-full absolute top-0 bg-primaryBgWhite h-[120px] flex flex-row p-3 shadow-lg z-10 theme-blue theme">
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
        <button
          className="bg-primaryBgWhite border-2 border-primary text-primary rounded-full w-32 py-2"
          onClick={() => router.push("/login")}
        >
          Login
        </button>
        <button
          className="bg-primary border-2 border-primary text-white rounded-full w-32 py-2"
          onClick={() => router.push("/sign-up")}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Header;
