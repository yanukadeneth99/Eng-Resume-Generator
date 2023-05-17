import { NextPage } from "next";
import { FaPlusCircle } from "react-icons/fa";

interface PropType {
  currentStep: number;
  _prev: () => void;
  _afterValid: (data: any) => void;
}

const Skills: NextPage<PropType> = ({ currentStep, _prev, _afterValid }) => {
  const _validate = () => {
    _afterValid({ skill: "Leadership" });
  };
  if (currentStep == 4) {
    return (
      <div className="px-12">
        <h1 className="text-4xl font-semibold mt-8 mb-8 text-primary">
          Skills
        </h1>
        <form onSubmit={() => {}}>
          <label htmlFor="skill" className="text-[20px]">
            Skill
          </label>
          <input
            type="text"
            name="skill"
            id="skill"
            className="w-full text-[20px] border-primary opacity-50 border-[1px] bg-[rgb(0,91,206,5%)] rounded-md mb-6 p-1.5"
            required
          />
          <br />
        </form>

        <button className="flex flex-row items-center gap-2 text-primary">
          <FaPlusCircle />
          Add more skills
        </button>

        <button
          className="bg-primary border-2 px-12 uppercase relative float-right border-primary text-white rounded-full w-fit py-2"
          onClick={_validate}
        >
          Save
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

export default Skills;
