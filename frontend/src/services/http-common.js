import axios from "axios";
const http = axios.create({
    baseURL:"http://localhost:9090"
})
export default http 