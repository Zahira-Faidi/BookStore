import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import catServices from "../services/category.services"
function CatUpdate(){
    const [name,setName]=useState("");
    const [description,setDescription]=useState("");
    const navigate=useNavigate();
    const {id}=useParams()
    
    useEffect(()=>{
        getCategoryById()
    },[])

    async function getCategoryById(){
        const rep=await catServices.getCategory(id)
        setName(rep.data.name)
        setDescription(rep.data.description)
        console.log(rep)
    }
    async function submitCategory(e){
        try{
            e.preventDefault()
            const c = {"_id":id,"name":name,"description":description}
            await catServices.updateCategory(c)
            navigate("/admin/category")
        }catch(error){
            console.log(error)
        }
    }
    return( 
        <div className="row">
            <div className="mx-auto col-10 col-md-8 col-lg-6">
                <form onSubmit={(e)=>submitCategory(e)}>
                <br/><br/>
                <div className="form-group">
                    <label for="nameCategoryInput">Name</label>
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" id="nameCategoryInput"/>
                </div>
                <div className="form-group">
                    <label for="descriptionCategoryInput">Description</label>
                    <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} className="form-control" id="descriptionCategoryInput"/>
                </div>
                <br/>        
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>        
        </div>        
    )
}
export default CatUpdate