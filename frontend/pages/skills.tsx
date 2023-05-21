import { deleteSkill, getSkills, saveSkills } from "@/lib/skills-service";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { FaPlusCircle, FaTrash } from "react-icons/fa";

interface PropType {
  currentStep: number;
  _prev: () => void;
  _afterValid: (data: any) => void;
}

export type SkillsFormType = {
  skills: {
    docId: string;
    skill: string;
  }[];
};

const Skills: NextPage<PropType> = ({ currentStep, _prev, _afterValid }) => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SkillsFormType>({
    defaultValues: {
      skills: [
        {
          docId: "",
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

  useEffect(() => {
    let getData = async () => {
      if (localStorage.getItem("user") != "") {
        let res = await getSkills(localStorage.getItem("user") || "");

        if (res.data != null) {
          reset({
            skills: res.data.map((v: any) => {
              return {
                docId: v.id,
                skill: v.skill,
              };
            }),
          });
        }
      }
    };

    getData();
  }, [reset]);

  const _validate = (data: SkillsFormType) => {
    _afterValid(data);

    if (localStorage.getItem("user") != "")
      saveSkills(data, localStorage.getItem("user") || "");
  };

  const addSkillInput = () => {
    append({
      docId: "",
      skill: "",
    });
  };

  const onSubmit = (data: SkillsFormType) => _validate(data);

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
                  onClick={() => {
                    deleteSkill(field.docId)
                      .then((res) => {})
                      .catch((err) => console.log(err.message));
                    remove(index);
                  }}
                >
                  <FaTrash />
                </div>
                <label htmlFor="skill" className="text-[20px]">
                  Skill
                </label>
                {errors?.skills?.[index]?.skill ? (
                  <p className="text-[red]">Invalid skill</p>
                ) : (
                  ""
                )}
                <input
                  type="text"
                  {...register(`skills.${index}.skill` as const, {
                    pattern: /^[a-zA-Z\s]+$/,
                  })}
                  className="w-full text-[20px] border-primary opacity-50 border-[1px] bg-[rgb(0,91,206,5%)] rounded-md mb-6 p-1.5"
                  required
                />
                <br />
                <input
                  type="hidden"
                  {...register(`skills.${index}.docId` as const)}
                />
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
