import { useState } from "react"
import { useNavigate } from "react-router-dom";
import catServices from "../services/category.services"
function CatNew(){
    const [name,setName]=useState("");
    const [description,setDescription]=useState("");
    const navigate=useNavigate();

    async function submitBook(e){
        e.preventDefault()
        const c = {"name":name,"description":description}
        await catServices.addCategory(c)
        navigate("/admin/category")
    }
    return(
        <div className="row mt-5">
            <div className="mx-auto col-10 col-md-8 col-lg-6">
                <form onSubmit={(e)=>submitBook(e)}>
                <div className="form-group">
                    <label for="nameCategoryInput">Name</label>
                    <input type="text" onChange={(e)=>setName(e.target.value)} className="form-control" id="nameCategoryInput" placeholder="Enter Category Name"/>
                </div>
                <div className="form-group">
                    <label for="descriptionCategoryInput">Description</label>
                    <input type="text" onChange={(e)=>setDescription(e.target.value)} className="form-control" id="descriptionCategoryInput" placeholder="Enter Book Description"/>
                </div>
                <br/>        
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>        
        </div>        
    )
}
export default CatNew