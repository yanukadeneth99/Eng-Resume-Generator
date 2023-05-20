import { NextPage } from "next";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { FaPlusCircle, FaTrash } from "react-icons/fa";

interface PropType {
  currentStep: number;
  _prev: () => void;
  _afterValid: (data: any) => void;
}

type FormInputs = {
  skills: {
    skill: string;
  }[];
};

const Skills: NextPage<PropType> = ({ currentStep, _prev, _afterValid }) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    defaultValues: {
      skills: [
        {
          skill: "",
        },
      ],
    },
    mode: "onBlur",
  });

  const { fields, append, remove } = useFieldArray({
    name: "skills",
    control,
  });

  const _validate = (data: FormInputs) => {
    _afterValid(data);
  };

  const addSkillInput = () => {
    append({
      skill: "",
    });
  };

  const onSubmit = (data: FormInputs) => _validate(data);

  if (currentStep == 4) {
    return (
      <div className="px-12">
        <h1 className="text-4xl font-semibold mt-8 mb-8 text-primary">
          Skills
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
                <label htmlFor="skill" className="text-[20px]">
                  Skill
                </label>
                <input
                  type="text"
                  {...register(`skills.${index}.skill` as const)}
                  className="w-full text-[20px] border-primary opacity-50 border-[1px] bg-[rgb(0,91,206,5%)] rounded-md mb-6 p-1.5"
                  required
                />
                <br />
              </div>
            );
          })}
          <button
            className="bg-primary border-2 px-12 uppercase relative float-right border-primary text-white rounded-full w-fit py-2"
            type="submit"
          >
            Save
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
          onClick={addSkillInput}
        >
          <FaPlusCircle />
          Add more skills
        </button>
      </div>
    );
  } else {
    return null;
  }
};

export default Skills;
