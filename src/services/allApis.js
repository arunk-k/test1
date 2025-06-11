import axios from "axios"
import base_url from "./base_url"


export const fetchAllStudents  = async () => await axios.get(`${base_url}students`)


