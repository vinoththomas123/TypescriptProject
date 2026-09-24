import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/users/";
const config = {
  headers: {
    Authentication: "nil",
    "Content-Type": "application/json"
  }
};
const patchURI = url + "1";
const patchData = {
  name: "Max Mustermann"
};

async function get(url: string, config: any) {
  const response = await axios.get(patchURI, config);
  console.log(response.data);
  console.log(response.status);
  console.log(response.headers);
}

async function patch(url: string, payload: any, config: any) {
  const response = await axios.patch(patchURI, payload, config);
  console.log(response.data);
  console.log(response.status);
  console.log(response.headers);
}

async function del(url: string, config: any) {
  const response = await axios.delete(patchURI, config);
  console.log(response.data);
  console.log(response.status);
  console.log(response.headers);
}

get(url, config);
patch(patchURI, patchData, config);
del(patchURI, config);
