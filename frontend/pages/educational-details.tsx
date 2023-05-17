import { NextPage } from "next";
import { FaPlusCircle } from "react-icons/fa";

interface PropType {
  currentStep: number;
  _prev: () => void;
  _afterValid: (data: any) => void;
}

const EducationalDetails: NextPage<PropType> = ({
  currentStep,
  _prev,
  _afterValid,
}) => {
  const _validate = () => {
    _afterValid({ school: "SLIIT" });
  };
  if (currentStep == 3) {
    return (
      <div className="px-12">
        <h1 className="text-4xl font-semibold mt-8 mb-8 text-primary">
          Education
        </h1>
        <form onSubmit={() => {}}>
          <label htmlFor="school" className="text-[20px]">
            School Name
          </label>
          <input
            type="text"
            name="school"
            id="school"
            className="w-full text-[20px] border-primary opacity-50 border-[1px] bg-[rgb(0,91,206,5%)] rounded-md mb-6 p-1.5"
            required
          />
          <br />
          <label htmlFor="degree" className="text-[20px]">
            Degree
          </label>
          <input
            type="text"
            name="degree"
            id="degree"
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
            I currently attend here
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
          Add more education details
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

export default EducationalDetails;
