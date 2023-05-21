import { WorkDetailsFormType } from "@/pages/work-details";
import axios from "axios";

export function saveWorkDetails(data: WorkDetailsFormType, user: string) {
  let promises: any[] = [];

  data.workExp.forEach((v) => {
    if (v.docId == "") {
      promises.push(
        axios.post(`${process.env.NEXT_PUBLIC_SERVER_APP}/work-details/`, {
          user,
          company: v.employer,
          period: `${v.startDate} / ${v.endDate}`,
          jobTitle: v.jobTitle,
          remarks: v.remarks,
        })
      );
    } else {
      promises.push(
        axios.put(`${process.env.NEXT_PUBLIC_SERVER_APP}/work-details/`, {
          docId: v.docId,
          user,
          company: v.employer,
          period: `${v.startDate} / ${v.endDate}`,
          jobTitle: v.jobTitle,
          remarks: v.remarks,
        })
      );
    }
  });

  Promise.all(promises)
    .then(
      axios.spread((...res) => {
        if (res.every((resp) => resp.status == 200)) {
          console.log("All work details are stored.");
        } else {
          console.log("All work details were not stored.");
        }
      })
    )
    .catch((err) => console.log(err.message));
}

export function getWorkDetails(user: string) {
  return axios.get(
    `${process.env.NEXT_PUBLIC_SERVER_APP}/work-details/by-user/${user}`
  );
}

export function deleteWorkDetail(docId: string) {
  return axios.delete(
    `${process.env.NEXT_PUBLIC_SERVER_APP}/work-details/by-doc/${docId}`
  );
}
