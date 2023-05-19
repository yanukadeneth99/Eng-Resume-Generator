import { PersonalDetailsType } from "@/pages/personal-details";
import axios from "axios";

export function savePersonalDetails(data: PersonalDetailsType, user: string) {
  axios
    .post("http://localhost:8000/personal-details/", {
      dob: data.dob,
      address: data.address,
      phone: data.phone,
      nic: data.nic,
      gender: data.gender,
      nationality: data.nationality,
      maritalStatus: data.marital_status,
      aboutme: data.abtYourself,
      fullName: `${data.firstName} ${data.lastName}`,
      user: user,
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err.message));
}
