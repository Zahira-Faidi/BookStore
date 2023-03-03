import http from "./http-common";

async function getAllUsers(){
    return await http.get("/users")
}
async function addUser(c){
    return await http.post("/users",c)
}

const userServices={
    getAllUsers,
    addUser
}
export default userServices