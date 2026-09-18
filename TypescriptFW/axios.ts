import axios from "axios";
let url = "https://jsonplaceholder.typicode.com/users/"
let config = {
  headers: {
    "Authentication":"nil",
    "Content-Type": "application/json"
  }
}
let patchURI = url + "1";
let patchData = {
 name: "Max Mustermann"
}
async function get(url:string, config:any){
  const response = await axios.get(url, config);
  console.log( response.data);
  console.log( response.status);
  console.log( response.headers);
}
async function patch(url:string, payload:any, config:any){
  const response = await axios.patch(url, payload, config);
  console.log( response.data);
  console.log( response.status);
  console.log( response.headers);
}
async function del(url:string, config:any){
  const response = await axios.delete(url, config);
  console.log( response.data);
  console.log( response.status);
  console.log( response.headers);
}
get(url, config);
patch (patchURI, patchData, config);
del (patchURI, config);
