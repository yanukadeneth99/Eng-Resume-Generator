import { NextPage } from "next";
import { useFieldArray, useForm } from "react-hook-form";
import { FaPlusCircle, FaTrash } from "react-icons/fa";

interface PropType {
  currentStep: number;
  _prev: () => void;
  _afterValid: (data: any) => void;
}

type FormInputs = {
  workExp: {
    jobTitle: string;
    employer: string;
    startDate: Date;
    endDate: Date;
    crntWorkplace: string;
    remarks: string;
  }[];
};

const WorkDetails: NextPage<PropType> = ({
  currentStep,
  _prev,
  _afterValid,
}) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    defaultValues: {
      workExp: [
        {
          jobTitle: "",
          employer: "",
          startDate: new Date(),
          endDate: new Date(),
          crntWorkplace: "",
          remarks: "",
        },
      ],
    },
    mode: "onBlur",
  });

  const { fields, append, remove } = useFieldArray({
    name: "workExp",
    control,
  });

  const _validate = (data: FormInputs) => {
    _afterValid(data);
  };

  const addNewWorkExpForm = () => {
    append({
      jobTitle: "",
      employer: "",
      startDate: new Date(),
      endDate: new Date(),
      crntWorkplace: "",
      remarks: "",
    });
  };

  const onSubmit = (data: FormInputs) => _validate(data);

  if (currentStep == 2) {
    return (
      <div className="px-12">
        <h1 className="text-4xl font-semibold mt-8 mb-8 text-primary">
          Work Experience
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="mb-8 relative">
          {fields.map((field, index) => {
            return (
              <div
                key={field.id}
                className="border-b border-gray-300 mb-8 relative"
              >
                <div
                  className="absolute right-[-30px] top-[-10px] cursor-pointer bg-[white] shadow p-2 rounded-md"
                  onClick={() => remove(index)}
                >
                  <FaTrash />
                </div>

                <label className="text-[20px]">Job Title</label>
                <input
                  type="text"
                  {...register(`workExp.${index}.jobTitle` as const)}
                  className="w-full text-[20px] border-primarෆy opacity-50 border-[1px] bg-[rgb(0,91,206,5%)] rounded-md mb-6 p-1.5"
                />
                <br />
                <label className="text-[20px]">Employer</label>
                <input
                  type="text"
                  {...register(`workExp.${index}.employer` as const)}
                  className="w-full text-[20px] border-primary opacity-50 border-[1px] bg-[rgb(0,91,206,5%)] rounded-md mb-6 p-1.5"
                  required
                />
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex-none">
                    <label className="text-[20px]">Start Date</label>
                    <br />
                    <input
                      type="date"
                      {...register(`workExp.${index}.startDate` as const)}
                      className="w-full text-[20px] border-primary opacity-50 border-[1px] bg-[rgb(0,91,206,5%)] rounded-md mb-6 p-1.5"
                      required
                    />
                  </div>
                  <div className="flex-none">
                    <label className="text-[20px]">End Date</label>
                    <br />
                    <input
                      type="date"
                      {...register(`workExp.${index}.endDate` as const)}
                      className="w-full text-[20px] border-primary opacity-50 border-[1px] bg-[rgb(0,91,206,5%)] rounded-md mb-6 p-1.5"
                      required
                    />
                  </div>
                </div>
                <input
                  type="checkbox"
                  {...register(`workExp.${index}.crntWorkplace` as const)}
                  className="text-[20px] border-primary opacity-50 border-[1px] bg-[rgb(0,91,206,5%)] rounded-md mb-6 me-4 p-1.5"
                  required
                />
                <label className="text-[20px]">I currently work here</label>
                <br />
                <label className="text-[20px]">Remarks</label>
                <textarea
                  {...register(`workExp.${index}.remarks` as const)}
                  cols={20}
                  rows={5}
                  className="w-full border-primary opacity-50 border-[1px] bg-[rgb(0,91,206,5%)] rounded-md mb-6 p-1.5"
                ></textarea>
              </div>
            );
          })}
          <button className="bg-primary border-2 px-12 uppercase relative float-right border-primary text-white rounded-full w-fit py-2">
            Next
          </button>
          <button
            className="border-2 px-12 uppercase relative float-right border-primary text-primary rounded-full w-fit py-2 me-4"
            onClick={_prev}
          >
            Back
          </button>
        </form>

        <button
          className="flex flex-row items-center gap-2 text-primary"
          onClick={addNewWorkExpForm}
        >
          <FaPlusCircle />
          Add more work experience
        </button>
      </div>
    );
  } else {
    return null;
  }
};

export default WorkDetails;
