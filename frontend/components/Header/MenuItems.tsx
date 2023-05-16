import { NextComponentType, NextPage } from "next";
import { useRouter } from "next/router";

import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";

interface PropType {
  isHome: boolean;
}

const MenuItems: NextPage<PropType> = ({ isHome }) => {
  const router = useRouter();
  const { isAuthenticated, checkAuthenticated } = useAuth();

  useEffect(() => {
    checkAuthenticated();
  }, [checkAuthenticated]);

  return (
    <>
      <li
        className="font-sans uppercase text-[20px] cursor-pointer"
        onClick={() => router.push("/")}
      >
        Home
      </li>
      {isHome ? (
        <>
          <li
            className="font-sans uppercase text-[20px] cursor-pointer"
            onClick={() => router.push("/#services")}
          >
            Services
          </li>
          <li
            className="font-sans uppercase text-[20px] cursor-pointer"
            onClick={() => router.push("/#contact-us")}
          >
            Contact Us
          </li>
          <li
            className="font-sans uppercase text-[20px] cursor-pointer"
            onClick={() => router.push("/#faq")}
          >
            FAQ
          </li>
        </>
      ) : (
        ""
      )}

      {isAuthenticated ? (
        <li className="font-sans uppercase text-[#ff0000] text-[20px] cursor-pointer">
          Dashboard
        </li>
      ) : (
        ""
      )}
    </>
  );
};

export default MenuItems;
