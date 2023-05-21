import { EducationalDetailsFormType } from "@/pages/educational-details";
import axios from "axios";

export function saveEducationalDetails(
  data: EducationalDetailsFormType,
  user: string
) {
  let promises: any[] = [];

  data.edu.forEach((v) => {
    if (v.docId == "") {
      promises.push(
        axios.post(`${process.env.NEXT_PUBLIC_SERVER_APP}/edu-details/`, {
          user,
          institute: v.school,
          period: `${v.startDate} / ${v.endDate}`,
          graduated: v.degree,
          remarks: v.remarks,
        })
      );
    } else {
      promises.push(
        axios.put(`${process.env.NEXT_PUBLIC_SERVER_APP}/edu-details/`, {
          docId: v.docId,
          user,
          institute: v.school,
          period: `${v.startDate} / ${v.endDate}`,
          graduated: v.degree,
          remarks: v.remarks,
        })
      );
    }
  });

  Promise.all(promises)
    .then(
      axios.spread((...responses) => {
        if (responses.every((resp) => resp.status == 200)) {
          console.log("All educational details are stored.");
        } else {
          console.log("All educational details were not stored.");
        }
      })
    )
    .catch((err) => console.log(err.message));
}

export function getEducationalDetails(user: string) {
  return axios.get(
    `${process.env.NEXT_PUBLIC_SERVER_APP}/edu-details/by-user/${user}`
  );
}

export function deleteEducationalDetails(docId: string) {
  return axios.delete(
    `${process.env.NEXT_PUBLIC_SERVER_APP}/edu-details/by-doc/${docId}`
  );
}
