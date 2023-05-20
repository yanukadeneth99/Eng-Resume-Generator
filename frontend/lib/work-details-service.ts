import { WorkDetailsFormType } from "@/pages/work-details";
import axios from "axios";

export function saveWorkDetails(data: WorkDetailsFormType, user: string) {
  let promises: any[] = [];

  data.workExp.forEach((v) => {
    if (v.docId == "") {
      promises.push(
        axios.post("http://localhost:8000/work-details/", {
          user,
          company: v.employer,
          period: `${v.startDate} / ${v.endDate}`,
          jobTitle: v.jobTitle,
          remarks: v.remarks,
        })
      );
    } else {
      promises.push(
        axios.put("http://localhost:8000/work-details/", {
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
  return axios.get(`http://localhost:8000/work-details/by-user/${user}`);
}
