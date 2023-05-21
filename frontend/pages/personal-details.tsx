import { useAuth } from "@/context/AuthContext";
import {
  getPersonalDetails,
  saveorUpdatePersonalDetails,
} from "@/lib/personal-service";
import { NextPage } from "next";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface PropType {
  currentStep: number;
  _prev: () => void;
  _afterValid: (data: any) => void;
}

export interface PersonalDetailsType {
  firstName: string;
  lastName: string;
  profession: string;
  phone: string;
  nic: string;
  gender: string;
  nationality: string;
  marital_status: string;
  dob: Date;
  email: string;
  address: string;
  abtYourself: string;
  docId: string;
}

const PersonalDetails: NextPage<PropType> = ({
  currentStep,
  _prev,
  _afterValid,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PersonalDetailsType>();

  useEffect(() => {
    if (localStorage.getItem("user") != "") {
      let getData = async () => {
        let res = await getPersonalDetails(localStorage.getItem("user") || "");

        if (res.data != null && res.data.length != 0) {
          let data = res.data[0];
          reset({
            docId: data.id,
            firstName: data.firstName,
            lastName: data.lastName,
            profession: data.profession,
            phone: data.phone,
            nic: data.nic,
            gender: data.gender,
            nationality: data.nationality,
            marital_status: data.marital_status,
            dob: data.dob,
            email: data.user,
            address: data.address,
            abtYourself: data.description,
          });
        }
      };

      getData();
    }
  }, [getPersonalDetails]);

  const _validate = (data: PersonalDetailsType) => {
    _afterValid({ personalDetails: data });
    if (localStorage.getItem("user") != "")
      saveorUpdatePersonalDetails(data, localStorage.getItem("user") || "");
  };

  const onSubmit = (data: PersonalDetailsType) => _validate(data);

  if (currentStep == 1) {
    return (
      <div className="px-12">
        <h1 className="text-4xl font-semibold mt-8 mb-8 text-primary">
          Personal Details
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex-none">
              <label htmlFor="firstName" className="text-[20px]">
                First Name
              </label>
              <br />
              {errors?.firstName ? (
                <p className="text-[red]">Invalid first name</p>
              ) : (
                ""
              )}
              <input
                type="text"
                id="firstName"
                {...register("firstName", { pattern: /^[A-Za-z ]+$/i })}
                className="w-full text-[20px] border-primary opacity-50 border-[1px] bg-[rgb(0,91,206,5%)] rounded-md mb-6 p-1.5"
                required
              />
            </div>
            <div className="flex-none">
              <label htmlFor="lastName" className="text-[20px]">
                Last Name
              </label>
              <br />
              {errors?.lastName ? (
                <p className="text-[red]">Invalid last name</p>
              ) : (
                ""
              )}
              <input
                type="text"
                {...register("lastName", { pattern: /^[A-Za-z ]+$/i })}
                id="lastName"
                className="w-full text-[20px] border-primary opacity-50 border-[1px] bg-[rgb(0,91,206,5%)] rounded-md mb-6 p-1.5"
                required
              />
            </div>
          </div>
          <label htmlFor="profession" className="text-[20px]">
            Profession
          </label>
          {errors?.profession ? (
            <p className="text-[red]">Invalid profession</p>
          ) : (
            ""
          )}
          <input
            type="text"
            {...register("profession", { pattern: /^[A-Za-z ]+$/i })}
            id="profession"
            className="w-full text-[20px] border-primary opacity-50 border-[1px] bg-[rgb(0,91,206,5%)] rounded-md mb-6 p-1.5"
            required
          />
          <br />
          <label htmlFor="nic" className="text-[20px]">
            NIC
          </label>
          <input
            type="text"
            {...register("nic")}
            id="nic"
            className="w-full text-[20px] border-primary opacity-50 border-[1px] bg-[rgb(0,91,206,5%)] rounded-md mb-6 p-1.5"
            required
          />
          <br />
          <label htmlFor="nationality" className="text-[20px]">
            Nationality
          </label>
          {errors?.nationality ? (
            <p className="text-[red]">Invalid nationality</p>
          ) : (
            ""
          )}
          <input
            type="text"
            {...register("nationality", { pattern: /^[A-Za-z ]+$/i })}
            id="nationality"
            className="w-full text-[20px] border-primary opacity-50 border-[1px] bg-[rgb(0,91,206,5%)] rounded-md mb-6 p-1.5"
            required
          />
          <br />
          <label htmlFor="dob" className="text-[20px]">
            Date of Birth
          </label>
          {errors?.dob ? (
            <p className="text-[red]">Invalid date of birth</p>
          ) : (
            ""
          )}
          <input
            type="date"
            {...register("dob", {
              validate: (dob) => {
                return new Date(dob).getTime() < new Date().getTime();
              },
            })}
            id="dob"
            className="w-full text-[20px] border-primary opacity-50 border-[1px] bg-[rgb(0,91,206,5%)] rounded-md mb-6 p-1.5"
            required
          />
          <br />
          <label htmlFor="gender" className="text-[20px]">
            Gender
          </label>
          <select
            {...register("gender")}
            className="w-full text-[20px] border-primary opacity-50 border-[1px] bg-[rgb(0,91,206,5%)] rounded-md mb-6 p-1.5"
          >
            <option value="Other">Other</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>
          <br />
          <label htmlFor="marital_status" className="text-[20px]">
            Marital Status
          </label>
          <select
            {...register("marital_status")}
            className="w-full text-[20px] border-primary opacity-50 border-[1px] bg-[rgb(0,91,206,5%)] rounded-md mb-6 p-1.5"
          >
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
            <option value="Widowed">Widowed</option>
          </select>
          <br />
          <label htmlFor="phone" className="text-[20px]">
            Phone
          </label>
          {errors?.phone ? (
            <p className="text-[red]">Invalid phone number</p>
          ) : (
            ""
          )}
          <input
            type="text"
            {...register("phone", { pattern: /^\d{9,11}$/ })}
            id="phone"
            className="w-full text-[20px] border-primary opacity-50 border-[1px] bg-[rgb(0,91,206,5%)] rounded-md mb-6 p-1.5"
            required
          />
          <br />
          <label htmlFor="email" className="text-[20px]">
            Email
          </label>
          {errors?.email ? (
            <p className="text-[red]">Invalid email address</p>
          ) : (
            ""
          )}
          <input
            type="text"
            {...register("email", {
              pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
            })}
            id="email"
            className="w-full text-[20px] border-primary opacity-50 border-[1px] bg-[rgb(0,91,206,5%)] rounded-md mb-6 p-1.5"
            required
          />
          <br />
          <label htmlFor="address" className="text-[20px]">
            Address
          </label>
          {errors?.address ? <p className="text-[red]">Invalid address</p> : ""}
          <input
            type="text"
            {...register("address", {
              pattern: /^[A-Za-z0-9\s\/,.-]+$/,
            })}
            id="address"
            className="w-full text-[20px] border-primary opacity-50 border-[1px] bg-[rgb(0,91,206,5%)] rounded-md mb-6 p-1.5"
            required
          />
          <br />
          <label htmlFor="abtYourself" className="text-[20px]">
            About yourself
          </label>
          {errors?.abtYourself ? (
            <p className="text-[red]">Invalid self description</p>
          ) : (
            ""
          )}
          <textarea
            {...register("abtYourself", {
              pattern: /^[A-Za-z0-9\s\/\\@,\.\-]+$/i,
            })}
            id="abtYourself"
            cols={20}
            rows={5}
            className="w-full border-primary opacity-50 border-[1px] bg-[rgb(0,91,206,5%)] rounded-md mb-6 p-1.5"
          ></textarea>
          <input type="hidden" {...register("docId")} />
          <button
            type="submit"
            className="bg-primary border-2 px-12 uppercase relative float-right border-primary text-white rounded-full w-fit py-2 "
          >
            Next
          </button>
        </form>
      </div>
    );
  } else {
    return null;
  }
};

export default PersonalDetails;
