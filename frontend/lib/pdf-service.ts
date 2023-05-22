import axios from "axios";

export function generatePdf(user: string, callback: (fileUrl: string) => void) {
  const options = {
    method: "POST",
    url: "https://api.pdfendpoint.com/v1/convert",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_PDF_TOKEN}`,
    },
    data: JSON.stringify({
      url: `https://cv-gen-backend.vercel.app/pdf/get/${user}`,
      orientation: "vertical",
      page_size: "A4",
      margin_top: "0cm",
      margin_bottom: "0cm",
      margin_left: "0cm",
      margin_right: "0cm",
    }),
  };

  axios
    .request(options)
    .then(function (response) {
      callback(response.data.data.url);
    })
    .catch(function (error) {
      console.error(error);
    });
}
