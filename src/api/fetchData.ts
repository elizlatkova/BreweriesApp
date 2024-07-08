import { URL_ALL_DATA } from "./constants";

// functions are always with lower case
export function FetchData() {
  //  use async/await
  fetch(URL_ALL_DATA)
    .then((res) => {
      console.log("RES 1", res);
      return res.json();
    })
    .catch((err: any) => console.log(err.message));
}