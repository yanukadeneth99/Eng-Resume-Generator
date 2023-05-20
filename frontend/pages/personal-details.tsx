import { useAuth } from "@/context/AuthContext";
import { savePersonalDetails } from "@/lib/personal-service";
import { NextPage } from "next";
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
}

const PersonalDetails: NextPage<PropType> = ({
  currentStep,
  _prev,
  _afterValid,
}) => {
  const { register, handleSubmit } = useForm<PersonalDetailsType>({
    defaultValues: {
      firstName: "",
      lastName: "",
      profession: "",
      phone: "",
      nic: "",
      gender: "",
      nationality: "",
      marital_status: "",
      dob: new Date(),
      email: "",
      address: "",
      abtYourself: "",
    },
  });

  const { user } = useAuth();

  const _validate = (data: PersonalDetailsType, user: string) => {
    _afterValid({ personalDetails: data });
    savePersonalDetails(data, user);
  };

  const onSubmit = (data: PersonalDetailsType) => _validate(data, user);

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
              <input
                type="text"
                id="firstName"
                {...register("firstName")}
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
                {...register("lastName")}
                id="lastName"
                className="w-full text-[20px] border-primary opacity-50 border-[1px] bg-[rgb(0,91,206,5%)] rounded-md mb-6 p-1.5"
                required
              />
            </div>
          </div>
          <label htmlFor="profession" className="text-[20px]">
            Profession
          </label>
          <input
            type="text"
            {...register("profession")}
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
          <input
            type="text"
            {...register("nationality")}
            id="nationality"
            className="w-full text-[20px] border-primary opacity-50 border-[1px] bg-[rgb(0,91,206,5%)] rounded-md mb-6 p-1.5"
            required
          />
          <br />
          <label htmlFor="dob" className="text-[20px]">
            Date of Birth
          </label>
          <input
            type="date"
            {...register("dob")}
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
          <input
            type="text"
            {...register("phone")}
            id="phone"
            className="w-full text-[20px] border-primary opacity-50 border-[1px] bg-[rgb(0,91,206,5%)] rounded-md mb-6 p-1.5"
            required
          />
          <br />
          <label htmlFor="email" className="text-[20px]">
            Email
          </label>
          <input
            type="email"
            {...register("email")}
            id="email"
            className="w-full text-[20px] border-primary opacity-50 border-[1px] bg-[rgb(0,91,206,5%)] rounded-md mb-6 p-1.5"
            required
          />
          <br />
          <label htmlFor="address" className="text-[20px]">
            Address
          </label>
          <input
            type="text"
            {...register("address")}
            id="address"
            className="w-full text-[20px] border-primary opacity-50 border-[1px] bg-[rgb(0,91,206,5%)] rounded-md mb-6 p-1.5"
            required
          />
          <br />
          <label htmlFor="abtYourself" className="text-[20px]">
            About yourself
          </label>
          <textarea
            {...register("abtYourself")}
            id="abtYourself"
            cols={20}
            rows={5}
            className="w-full border-primary opacity-50 border-[1px] bg-[rgb(0,91,206,5%)] rounded-md mb-6 p-1.5"
          ></textarea>
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
