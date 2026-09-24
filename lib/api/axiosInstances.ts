//===============================================
//Create an API using Axios Create method - AxiosInstance
import axios = require("axios");

//===============================================
const api: axios.AxiosInstance = axios.create({

  baseURL: "https://jsonplaceholder.typicode.com",

  timeout: 5000,

  proxy: {
    protocol:"",
    host:"",
    port: 1000,
    auth: {
      "username": "xyz",
      "password": "xzy"
    }
  },

  headers: {
    "Content-Type": "application/json",
    "Authorization": 'Bearer token' 
  },

  auth: {
    "username": "",
    "password": ""
  },

  data: { name: "Max" }
});

async function get(url: string) {
  let response = await api.get(url);
  console.log(response.data)
  console.log(response.status)
}

async function patch(url: string, payload?: any) {

  console.log("Patch Request");
  let response = await api.patch(url, payload);
  console.log(response.data)
  console.log(response.status)
}

async function del(url: string) {
  let response = await api.delete(url);
  console.log(response.data)
  console.log(response.status)
}

get("/users/");
patch("/users/1");
del("/users/1");
