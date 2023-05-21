import { SkillsFormType } from "@/pages/skills";
import axios from "axios";

export function saveSkills(data: SkillsFormType, user: string) {
  let promises: any[] = [];

  data.skills.forEach((v) => {
    if (v.docId == "") {
      promises.push(
        axios.post(`${process.env.NEXT_PUBLIC_SERVER_APP}/skill-details/`, {
          user,
          skill: v.skill,
        })
      );
    } else {
      promises.push(
        axios.put(`${process.env.NEXT_PUBLIC_SERVER_APP}/skill-details/`, {
          docId: v.docId,
          user,
          skill: v.skill,
        })
      );
    }
  });

  Promise.all(promises)
    .then(
      axios.spread((...responses) => {
        if (responses.every((resp) => resp.status == 200)) {
          console.log("All skills are stored.");
        } else {
          console.log("All skills were not stored.");
        }
      })
    )
    .catch((err) => console.log(err.message));
}

export function getSkills(user: string) {
  return axios.get(
    `${process.env.NEXT_PUBLIC_SERVER_APP}/skill-details/by-user/${user}`
  );
}

export function deleteSkill(docId: string) {
  return axios.delete(
    `${process.env.NEXT_PUBLIC_SERVER_APP}/skill-details/by-doc/${docId}`
  );
}
