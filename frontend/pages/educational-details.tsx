import {
  deleteEducationalDetails,
  getEducationalDetails,
  saveEducationalDetails,
} from "@/lib/education-service";
import { NextPage } from "next";
import { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { FaPlusCircle, FaTrash } from "react-icons/fa";

interface PropType {
  currentStep: number;
  _prev: () => void;
  _afterValid: (data: any) => void;
}

export type EducationalDetailsFormType = {
  edu: {
    docId: string;
    school: string;
    degree: string;
    startDate: Date;
    endDate: Date;
    crntSchool: string;
    remarks: string;
  }[];
};

const EducationalDetails: NextPage<PropType> = ({
  currentStep,
  _prev,
  _afterValid,
}) => {
  const { register, control, handleSubmit, reset } =
    useForm<EducationalDetailsFormType>({
      defaultValues: {
        edu: [
          {
            docId: "",
            school: "",
            degree: "",
            startDate: new Date(),
            endDate: new Date(),
            crntSchool: "",
            remarks: "",
          },
        ],
      },
      mode: "onBlur",
    });

  useEffect(() => {
    if (localStorage.getItem("user") != "") {
      let getData = async () => {
        let res = await getEducationalDetails(
          localStorage.getItem("user") || ""
        );

        if (res.data != null) {
          reset({
            edu: res.data.map((v: any) => {
              let startDate = v.period.split("/")[0].trim();
              let endDate = v.period.split("/")[1].trim();

              return {
                docId: v.id,
                school: v.institute,
                degree: v.graduated,
                startDate: startDate,
                endDate: endDate,
                crntSchool: false,
                remarks: v.remarks,
              };
            }),
          });
        }
      };

      getData();
    }
  }, [getEducationalDetails]);

  const { fields, append, remove } = useFieldArray({
    name: "edu",
    control,
  });

  const _validate = (data: EducationalDetailsFormType) => {
    _afterValid(data);

    if (localStorage.getItem("user") != "")
      saveEducationalDetails(data, localStorage.getItem("user") || "");
  };

  const addNewEduForm = () => {
    append({
      docId: "",
      school: "",
      degree: "",
      startDate: new Date(),
      endDate: new Date(),
      crntSchool: "",
      remarks: "",
    });
  };

  const onSubmit = (data: EducationalDetailsFormType) => _validate(data);

  if (currentStep == 3) {
    return (
      <div className="px-12">
        <h1 className="text-4xl font-semibold mt-8 mb-8 text-primary">
          Education
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
                  onClick={() => {
                    deleteEducationalDetails(field.docId);
                    remove(index);
                  }}
                >
                  <FaTrash />
                </div>
                <label htmlFor="school" className="text-[20px]">
                  School Name
                </label>
                <input
                  type="text"
                  {...register(`edu.${index}.school` as const)}
                  className="w-full text-[20px] border-primary opacity-50 border-[1px] bg-[rgb(0,91,206,5%)] rounded-md mb-6 p-1.5"
                  required
                />
                <br />
                <label htmlFor="degree" className="text-[20px]">
                  Degree
                </label>
                <input
                  type="text"
                  {...register(`edu.${index}.degree` as const)}
                  className="w-full text-[20px] border-primary opacity-50 border-[1px] bg-[rgb(0,91,206,5%)] rounded-md mb-6 p-1.5"
                  required
                />
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex-none">
                    <label htmlFor="startDate" className="text-[20px]">
                      Start Date
                    </label>
                    <br />
                    <input
                      type="date"
                      {...register(`edu.${index}.startDate` as const)}
                      className="w-full text-[20px] border-primary opacity-50 border-[1px] bg-[rgb(0,91,206,5%)] rounded-md mb-6 p-1.5"
                      required
                    />
                  </div>
                  <div className="flex-none">
                    <label htmlFor="endDate" className="text-[20px]">
                      End Date
                    </label>
                    <br />
                    <input
                      type="date"
                      {...register(`edu.${index}.endDate` as const)}
                      className="w-full text-[20px] border-primary opacity-50 border-[1px] bg-[rgb(0,91,206,5%)] rounded-md mb-6 p-1.5"
                      required
                    />
                  </div>
                </div>
                <input
                  type="checkbox"
                  {...register(`edu.${index}.crntSchool` as const)}
                  className="text-[20px] border-primary opacity-50 border-[1px] bg-[rgb(0,91,206,5%)] rounded-md mb-6 me-4 p-1.5"
                />
                <label htmlFor="crntSchool" className="text-[20px]">
                  I currently attend here
                </label>
                <br />
                <label htmlFor="remarks" className="text-[20px]">
                  Remarks
                </label>
                <textarea
                  {...register(`edu.${index}.remarks` as const)}
                  cols={20}
                  rows={5}
                  className="w-full border-primary opacity-50 border-[1px] bg-[rgb(0,91,206,5%)] rounded-md mb-6 p-1.5"
                ></textarea>
                <input
                  type="hidden"
                  {...register(`edu.${index}.docId` as const)}
                />
              </div>
            );
          })}
          <button
            className="bg-primary border-2 px-12 uppercase relative float-right border-primary text-white rounded-full w-fit py-2"
            type="submit"
          >
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
          onClick={addNewEduForm}
        >
          <FaPlusCircle />
          Add more education details
        </button>
      </div>
    );
  } else {
    return null;
  }
};

export default EducationalDetails;
