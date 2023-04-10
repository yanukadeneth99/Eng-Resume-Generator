import { NextComponentType } from "next";
import { useRouter } from "next/router";

const MenuItems: NextComponentType = () => {
  const router = useRouter();

  return (
    <>
      <li
        className="font-sans uppercase text-[20px] cursor-pointer"
        onClick={() => router.push("/")}
      >
        Home
      </li>
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
  );
};

export default MenuItems;
