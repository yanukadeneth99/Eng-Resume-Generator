import { NextPage } from "next";
import { useForm } from "react-hook-form";

interface PropType {
  currentStep: number;
  _prev: () => void;
  _afterValid: (data: any) => void;
}

interface PersonalDetailsType {
  firstName: string;
  lastName: string;
  profession: string;
  phone: string;
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
      email: "",
      address: "",
      abtYourself: "",
    },
  });

  const _validate = (data: PersonalDetailsType) => {
    _afterValid({ personalDetails: data });
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
