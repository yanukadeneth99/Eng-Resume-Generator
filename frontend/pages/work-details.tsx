import { NextPage } from "next";
import { useEffect, useState } from "react";
import { FaPlusCircle, FaTrash } from "react-icons/fa";

interface PropType {
  currentStep: number;
  _prev: () => void;
  _afterValid: (data: any) => void;
}

const WorkDetails: NextPage<PropType> = ({
  currentStep,
  _prev,
  _afterValid,
}) => {
  const [workForms, setWorkForms] = useState([
    Date.now().toString(36) + Math.random().toString(36).substr(2),
  ]);

  const _validate = () => {
    _afterValid({ company: "Zebra" });
  };

  const addNewWorkExpForm = () => {
    setWorkForms([
      ...workForms,
      Date.now().toString(36) + Math.random().toString(36).substr(2),
    ]);
  };

  const deleteForm = (key: string) => {
    setWorkForms(workForms.filter((v) => v !== key));
  };

  if (currentStep == 2) {
    return (
      <div className="px-12">
        <h1 className="text-4xl font-semibold mt-8 mb-8 text-primary">
          Work Experience
        </h1>

        {workForms.map((v) => {
          return (
            <form
              key={v}
              onSubmit={() => {}}
              className="border-b border-gray-300 mb-8 relative"
              data-x={v}
            >
              <div
                className="absolute right-[-30px] top-[-10px] cursor-pointer bg-[white] shadow p-2 rounded-md"
                onClick={() => deleteForm(v)}
              >
                <FaTrash />
              </div>

              <label htmlFor={v + "_jobTitle"} className="text-[20px]">
                Job Title
              </label>
              <input
                type="text"
                name={v + "_jobTitle"}
                id={v + "_jobTitle"}
                className="w-full text-[20px] border-primary opacity-50 border-[1px] bg-[rgb(0,91,206,5%)] rounded-md mb-6 p-1.5"
                required
              />
              <br />
              <label htmlFor={v + "_employer"} className="text-[20px]">
                Employer
              </label>
              <input
                type="text"
                name={v + "_employer"}
                id={v + "_employer"}
                className="w-full text-[20px] border-primary opacity-50 border-[1px] bg-[rgb(0,91,206,5%)] rounded-md mb-6 p-1.5"
                required
              />
              <div className="grid grid-cols-2 gap-4">
                <div className="flex-none">
                  <label htmlFor={v + "_startDate"} className="text-[20px]">
                    Start Date
                  </label>
                  <br />
                  <input
                    type="date"
                    name={v + "_startDate"}
                    id={v + "_startDate"}
                    className="w-full text-[20px] border-primary opacity-50 border-[1px] bg-[rgb(0,91,206,5%)] rounded-md mb-6 p-1.5"
                    required
                  />
                </div>
                <div className="flex-none">
                  <label htmlFor={v + "_endDate"} className="text-[20px]">
                    End Date
                  </label>
                  <br />
                  <input
                    type="date"
                    name={v + "_endDate"}
                    id={v + "_endDate"}
                    className="w-full text-[20px] border-primary opacity-50 border-[1px] bg-[rgb(0,91,206,5%)] rounded-md mb-6 p-1.5"
                    required
                  />
                </div>
              </div>
              <input
                type="checkbox"
                name={v + "_crntWorkplace"}
                id={v + "_crntWorkplace"}
                className="text-[20px] border-primary opacity-50 border-[1px] bg-[rgb(0,91,206,5%)] rounded-md mb-6 me-4 p-1.5"
                required
              />
              <label htmlFor={v + "_crntWorkplace"} className="text-[20px]">
                I currently work here
              </label>
              <br />
              <label htmlFor={v + "_remarks"} className="text-[20px]">
                Remarks
              </label>
              <textarea
                name={v + "_remarks"}
                id={v + "_remarks"}
                cols={20}
                rows={5}
                className="w-full border-primary opacity-50 border-[1px] bg-[rgb(0,91,206,5%)] rounded-md mb-6 p-1.5"
              ></textarea>
            </form>
          );
        })}
        <button
          className="flex flex-row items-center gap-2 text-primary"
          onClick={addNewWorkExpForm}
        >
          <FaPlusCircle />
          Add more work experience
        </button>

        <button
          className="bg-primary border-2 px-12 uppercase relative float-right border-primary text-white rounded-full w-fit py-2"
          onClick={_validate}
        >
          Next
        </button>
        <button
          className="border-2 px-12 uppercase relative float-right border-primary text-primary rounded-full w-fit py-2 me-4"
          onClick={_prev}
        >
          Back
        </button>
      </div>
    );
  } else {
    return null;
  }
};

export default WorkDetails;
