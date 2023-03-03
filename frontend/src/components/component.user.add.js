import { useState } from "react"
import { useNavigate } from "react-router-dom";
import userServices from "../services/user.services"
function UserNew(){
    const [lName,setlName]=useState("");
    const [fName,setfName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [image,setImage]=useState("");

    const navigate=useNavigate();

    async function submitUser(e){
        e.preventDefault()
        const u = {"lName":lName,"fName":fName,"email":email,"password":password,"image":image}
        await userServices.addUser(u)
        navigate("/admin/users")
    }
    return(
        <div className="row mt-5">
            <div className="mx-auto col-10 col-md-8 col-lg-6">
                <form onSubmit={(e)=>submitUser(e)}>
                <div className="form-group">
                    <label for="lNameInput">lName</label>
                    <input type="text" onChange={(e)=>setlName(e.target.value)} className="form-control" id="lNameInput"/>
                </div>
                <div className="form-group">
                    <label for="fNameInput">fName</label>
                    <input type="text" onChange={(e)=>setfName(e.target.value)} className="form-control" id="fNameInput"/>
                </div>
                <div className="form-group">
                    <label for="emailInput">Email</label>
                    <input type="email" onChange={(e)=>setEmail(e.target.value)} className="form-control" id="emailInput"/>
                </div>
                <div className="form-group">
                    <label for="imageInput">image</label>
                    <input type="text" onChange={(e)=>setImage(e.target.value)} className="form-control" id="imageInput"/>
                </div>
                <div className="form-group">
                    <label for="passwordInput">Password</label>
                    <input type="password" onChange={(e)=>setPassword(e.target.value)} className="form-control" id="passwordInput"/>
                </div>
                <br/>        
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>        
        </div>        
    )
}
export default UserNew