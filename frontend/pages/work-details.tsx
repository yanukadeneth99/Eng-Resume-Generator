import { NextPage } from "next";
import { FaPlusCircle } from "react-icons/fa";

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
  const _validate = () => {
    _afterValid({ company: "Zebra" });
  };
  if (currentStep == 2) {
    return (
      <div className="px-12">
        <h1 className="text-4xl font-semibold mt-8 mb-8 text-primary">
          Work Experience
        </h1>
        <form onSubmit={() => {}}>
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
          <label htmlFor="employer" className="text-[20px]">
            Employer
          </label>
          <input
            type="text"
            name="employer"
            id="employer"
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
                name="startDate"
                id="startDate"
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
                name="endDate"
                id="endDate"
                className="w-full text-[20px] border-primary opacity-50 border-[1px] bg-[rgb(0,91,206,5%)] rounded-md mb-6 p-1.5"
                required
              />
            </div>
          </div>
          <input
            type="checkbox"
            name="crntWorkplace"
            id="crntWorkplace"
            className="text-[20px] border-primary opacity-50 border-[1px] bg-[rgb(0,91,206,5%)] rounded-md mb-6 me-4 p-1.5"
            required
          />
          <label htmlFor="crntWorkplace" className="text-[20px]">
            I currently work here
          </label>
          <br />
          <label htmlFor="remarks" className="text-[20px]">
            Remarks
          </label>
          <textarea
            name="remarks"
            id="remarks"
            cols={20}
            rows={5}
            className="w-full border-primary opacity-50 border-[1px] bg-[rgb(0,91,206,5%)] rounded-md mb-6 p-1.5"
          ></textarea>
        </form>

        <button className="flex flex-row items-center gap-2 text-primary">
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
