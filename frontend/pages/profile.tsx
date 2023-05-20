import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import Header from "@/components/Header";

import DP from "../public/images/dp.jpg";

const Profile: NextPage = () => {
  return (
    <>
      <Head>
        <title>Profile | Resume Generator</title>
        <meta name="description" content="Login to Create your own Resume" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header isHome={false} />
      <div className="h-[calc(100vh-120px)] mt-[120px]">
        <div
          className="w-[80%] h-[90%] bg-white shadow-2xl relative top-[50%] left-[50%] px-12 rounded-xl theme-blue theme font-sans"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <div className="grid grid-cols-2 pt-12">
            <div className="px-12 h-full">
              <h1 className="text-4xl font-semibold mt-8 mb-8 text-primary">
                Edit Details
              </h1>
              <form onSubmit={() => {}}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex-none">
                    <label htmlFor="firstName" className="text-[20px]">
                      First Name
                    </label>
                    <br />
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      className="w-full text-[20px] border-primary opacity-50 border-[1px] bg-[rgb(0,91,206,5%)] rounded-md mb-6 p-1.5"
                      required
                    />
                  </div>
                  <div className="flex-none">
                    <label htmlFor="lastName" className="text-[20px]">
                      Last Name
                    </label>
                    <br />
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      className="w-full text-[20px] border-primary opacity-50 border-[1px] bg-[rgb(0,91,206,5%)] rounded-md mb-6 p-1.5"
                      required
                    />
                  </div>
                </div>
                <label htmlFor="email" className="text-[20px]">
                  Email
                </label>
                <br />
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full text-[20px] border-primary opacity-50 border-[1px] bg-[rgb(0,91,206,5%)] rounded-md mb-6 p-1.5"
                  required
                />
                <br />
                <label htmlFor="jobTitle" className="text-[20px]">
                  Job Title
                </label>
                <input
                  type="text"
                  name="jobTitle"
                  id="jobTitle"
                  className="w-full text-[20px] border-primary opacity-50 border-[1px] bg-[rgb(0,91,206,5%)] rounded-md mb-6 p-1.5"
                  required
                />
                <br />
                <label htmlFor="abtYourself" className="text-[20px]">
                  About yourself
                </label>
                <textarea
                  name="abtYourself"
                  id="abtYourself"
                  cols={20}
                  rows={5}
                  className="w-full border-primary opacity-50 border-[1px] bg-[rgb(0,91,206,5%)] rounded-md mb-6 p-1.5"
                ></textarea>
              </form>
            </div>
            <div className="border-l px-12 h-full">
              <h1 className="text-4xl font-semibold mt-8 mb-8 text-primary">
                Update Your Picture
              </h1>
              <Image
                src={DP}
                width={100}
                alt="Profile picture"
                className="rounded-full"
              />
              <h1 className="text-4xl font-semibold mt-8 mb-8 text-primary">
                Update Password
              </h1>
              <label htmlFor="oldPassword" className="text-[20px]">
                Old Password
              </label>
              <input
                type="password"
                name="oldPassword"
                id="oldPassword"
                className="w-full text-[20px] border-primary opacity-50 border-[1px] bg-[rgb(0,91,206,5%)] rounded-md mb-6 p-1.5"
                required
              />
              <br />
              <label htmlFor="newPassword" className="text-[20px]">
                New Password
              </label>
              <input
                type="password"
                name="newPassword"
                id="newPassword"
                className="w-full text-[20px] border-primary opacity-50 border-[1px] bg-[rgb(0,91,206,5%)] rounded-md mb-6 p-1.5"
                required
              />
              <br />
              <label htmlFor="confirmPassword" className="text-[20px]">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className="w-full text-[20px] border-primary opacity-50 border-[1px] bg-[rgb(0,91,206,5%)] rounded-md mb-6 p-1.5"
                onChange={() => {}}
                required
              />
            </div>
            <button
              className="bg-primary border-2 px-12 uppercase me-24 absolute bottom-10 right-0 border-primary text-white rounded-full w-fit py-2 "
              onClick={() => {}}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
