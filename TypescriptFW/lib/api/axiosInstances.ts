
import axios, { AxiosInstance } from "axios";

//===============================================
//Create an API using Axios Create method - AxiosInstance
//===============================================
const api: AxiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Authentication":"nil",
    "Content-Type": "application/json"
  }
});
async function get (url:string){
  let response = await api.get(url);
  console.log (response.data)
  console.log (response.status)
}
async function patch (url:string, payload:any){
  let response = await api.patch(url, payload);
  console.log (response.data)
  console.log (response.status)
}
async function del (url:string){
  let response = await api.delete(url);
  console.log (response.data)
  console.log (response.status)
}
get("/users/");
patch ("/users/1", { name: "Max" });
del ("/users/1");
