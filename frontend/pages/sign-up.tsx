import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import useFirebaseAuth from "../lib/useFBAuth";
import { useAuth } from "../context/AuthContext";

// Logo
import RLogo from "../public/images/logo.png";
import LoginImage from "../public/images/login.png";
import Facebook from "../public/images/icons/facebook.png";
import Google from "../public/images/icons/google.png";
import Apple from "../public/images/icons/apple.png";
import { useState } from "react";

const SignUp: NextPage = () => {
  const [cPwdError, setCPwdError] = useState("");

  const {
    _createUserWithEmailAndPassword,
    _signInWithGoogle,
    _signInWithFacebook,
  } = useFirebaseAuth();
  const router = useRouter();
  const { login } = useAuth();

  const onSubmit = (event: any) => {
    let { email, password, firstName, lastName, confirmPassword } =
      event.target;

    if (confirmPassword.value == password.value) {
      _createUserWithEmailAndPassword(email.value, password.value)
        .then((authUser) => {
          console.log("Success. The user is created in firebase");
          router.push("/login");
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      setCPwdError("Password does not match");
    }

    event.preventDefault();
  };

  const signInWithGoogle = () => {
    _signInWithGoogle()
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;

        login(token ? token : null);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...

        console.log(
          errorCode +
            " || " +
            errorMessage +
            " || " +
            email +
            " || " +
            credential
        );
      });
  };

  const signInWithFacebook = () => {
    _signInWithFacebook()
      .then((result) => {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential?.accessToken;

        login(accessToken ? accessToken : null);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);

        console.log(
          errorCode +
            " || " +
            errorMessage +
            " || " +
            email +
            " || " +
            credential
        );
      });
  };

  return (
    <>
      {/* Meta Tags */}
      <Head>
        <title>Register | Resume Generator</title>
        <meta name="description" content="Register to Create your own Resume" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex w-screen theme-blue theme font-sans">
        <div className="flex-none w-3/5 ps-14 pt-8">
          <div className="w-full bg-primaryBgWhite h-[120px] flex flex-row p-3 z-10">
            {/* Logo 20% */}
            <div className="basis-3/12 flex justify-center items-center">
              <Image src={RLogo} alt="Logo" />
            </div>

            {/* Menu Bar 60% */}
            <div className="basis-6/12 flex justify-center items-center ps-14 pt-6">
              <ul className="w-full flex flex-row justify-start items-center space-x-8">
                <>
                  <li
                    className="font-sans uppercase text-[20px] cursor-pointer"
                    onClick={() => router.push("/")}
                  >
                    Home
                  </li>
                </>
              </ul>
            </div>
          </div>
          <h1 className="text-6xl mt-4 ps-4 text-primary font-bold uppercase">
            Resume Generator
          </h1>
          <h2 className="text-3xl mt-2 ps-4 text-primaryBg">
            Create your perfect CV with ease!
          </h2>
          <div className="relative mt-8">
            <Image
              src={LoginImage}
              alt="Login"
              className="absolute top-[50%] left-[50%]"
              style={{ transform: "translate(-50%, 0%)" }}
            />
          </div>
        </div>
        <div className="flex-none relative w-2/5 bg-[#d9d9d9] bg-no-repeat bg-center bg-cover bg-login-texture h-screen">
          <div
            className="w-[70%] h-[90%] bg-white shadow-2xl absolute top-[50%] left-[50%] px-12 rounded-xl"
            style={{ transform: "translate(-50%, -50%)" }}
          >
            <h1 className="text-5xl text-center font-semibold mt-8 mb-16 text-primary">
              Sign Up
            </h1>
            <form onSubmit={onSubmit}>
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
              <label htmlFor="password" className="text-[20px]">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
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
                onChange={() => setCPwdError("")}
                required
              />
              <span className="text-sm text-red-600">{cPwdError}</span>
              <br />
              <div className="flex justify-center mt-4">
                <button
                  type="submit"
                  className="text-uppercase bg-primary text-white p-2 px-6 rounded-full"
                >
                  <div className="flex flex-column">
                    <span className="me-4 uppercase">Sign Up</span>
                    <Image
                      src={"/images/arrow-right.svg"}
                      width={15}
                      height={15}
                      alt="submit"
                    />
                  </div>
                </button>
              </div>
            </form>
            <p className="text-center mt-6 text-[#444B59] text-[18px]">
              Already have an account ?
              <span
                className="text-primary cursor-pointer"
                onClick={() => router.push("/login")}
              >
                {" "}
                Log in
              </span>
            </p>
            <div className="flex items-center mt-14">
              <hr className="border-[1px] border-primaryBg flex-grow mr-3" />
              <span className="text-[#444B59] font-medium text-[18px]">
                or continue with
              </span>
              <hr className="border-[1px] border-primaryBg flex-grow ml-3" />
            </div>
            <div className="grid grid-cols-3 w-full gap-12 mt-4">
              <div
                className="border-primaryBg rounded-xl py-4 border-2 cursor-pointer"
                onClick={signInWithGoogle}
              >
                <Image
                  src={Google}
                  alt="Sign in with Google"
                  className="mx-auto"
                />
              </div>
              <div
                className="border-primaryBg rounded-xl py-4 border-2 cursor-pointer"
                onClick={signInWithFacebook}
              >
                <Image
                  src={Facebook}
                  alt="Sign in with Facebook"
                  className="mx-auto"
                />
              </div>
              <div className="border-primaryBg rounded-xl py-4 border-2 cursor-pointer">
                <Image
                  src={Apple}
                  alt="Sign in with Apple"
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
