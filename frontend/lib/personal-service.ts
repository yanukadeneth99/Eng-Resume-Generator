import { PersonalDetailsType } from "@/pages/personal-details";
import axios from "axios";

export function saveorUpdatePersonalDetails(
  data: PersonalDetailsType,
  user: string
) {
  if (data.docId == "") {
    axios
      .post("http://localhost:8000/personal-details/", {
        dob: data.dob,
        address: data.address,
        phone: data.phone,
        nic: data.nic,
        gender: data.gender,
        profession: data.profession,
        nationality: data.nationality,
        maritalStatus: data.marital_status,
        aboutme: data.abtYourself,
        fullName: `${data.firstName} ${data.lastName}`,
        firstName: data.firstName,
        lastName: data.lastName,
        user: user,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.message));
  } else {
    axios
      .put("http://localhost:8000/personal-details/", {
        docId: data.docId,
        dob: data.dob,
        address: data.address,
        phone: data.phone,
        nic: data.nic,
        gender: data.gender,
        profession: data.profession,
        nationality: data.nationality,
        maritalStatus: data.marital_status,
        aboutme: data.abtYourself,
        fullName: `${data.firstName} ${data.lastName}`,
        firstName: data.firstName,
        lastName: data.lastName,
        user: user,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.message));
  }
}

export function getPersonalDetails(user: string) {
  return axios.get(`http://localhost:8000/personal-details/by-user/${user}`);
}
