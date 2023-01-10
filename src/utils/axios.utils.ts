import axios from "axios";
import { Functions } from "./imports.utils";

const token = localStorage.getItem("token")

 const instance =()=>{
 const data =   axios.create({
        baseURL:Functions.getBaseUrl()+"/api/v1/",
        headers:{
            "authorization" :token || ""
        }
    })
    return data
}

export default instance