import { NextComponentType } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { FaAngleDown } from "react-icons/fa";

import { useAuth } from "../context/AuthContext";

// Logo
import RLogo from "../public/images/logo.png";
import DP from "../public/images/dp.jpg";

// Sub Components
import MenuItems from "./Header/MenuItems";
import { useEffect } from "react";

const Header: NextComponentType = () => {
  const router = useRouter();
  const { isAuthenticated, logout, checkAuthenticated } = useAuth();

  const signOut = () => {
    logout();
    router.reload();
  };

  useEffect(() => {
    checkAuthenticated();
  }, [checkAuthenticated]);

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

      {isAuthenticated ? (
        <div className="basis-3/12 flex justify-end items-center pe-14">
          <Image
            src={DP}
            width={60}
            alt="Profile picture"
            className="rounded-full"
          />

          <div className="dropdown">
            <button className="dropdown-btn">
              <FaAngleDown className="text-[30px]" />
            </button>
            <div className="dropdown-content">
              <div className="drop-item cursor-pointer p-4" onClick={signOut}>
                Sign Out
              </div>
            </div>
          </div>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default Header;
