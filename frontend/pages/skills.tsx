import { NextPage } from "next";
import { useState } from "react";
import { FaPlusCircle, FaTrash } from "react-icons/fa";

interface PropType {
  currentStep: number;
  _prev: () => void;
  _afterValid: (data: any) => void;
}

const Skills: NextPage<PropType> = ({ currentStep, _prev, _afterValid }) => {
  const [skillInputs, setSkillInputs] = useState([
    Date.now().toString(36) + Math.random().toString(36).substr(2),
  ]);
  const _validate = () => {
    _afterValid({ skill: "Leadership" });
  };

  const addSkillInput = () => {
    setSkillInputs([
      ...skillInputs,
      Date.now().toString(36) + Math.random().toString(36).substr(2),
    ]);
  };

  const deleteForm = (key: string) => {
    setSkillInputs(skillInputs.filter((v) => v !== key));
  };

  if (currentStep == 4) {
    return (
      <div className="px-12">
        <h1 className="text-4xl font-semibold mt-8 mb-8 text-primary">
          Skills
        </h1>

        {skillInputs.map((v) => {
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
          );
        })}

        <button
          className="flex flex-row items-center gap-2 text-primary"
          onClick={addSkillInput}
        >
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
