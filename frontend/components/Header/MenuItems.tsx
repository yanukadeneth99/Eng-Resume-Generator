import { NextComponentType } from "next";

const MenuItems: NextComponentType = () => {
  return (
    <>
      <li className="font-sans uppercase text-[20px]">Home</li>
      <li className="font-sans uppercase text-[20px]">Services</li>
      <li className="font-sans uppercase text-[20px]">Contact Us</li>
      <li className="font-sans uppercase text-[20px]">FAQ</li>
    </>
  );
};

export default MenuItems;
