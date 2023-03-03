import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import bookService from "../services/book.services";
import catServices from "../services/category.services"
function BookNew(){
    const [name,setName]=useState("");
    const [description,setDescription]=useState("");
    const [isbn,setIsbn]=useState("");
    const [auteur,setAuteur]=useState("");
    const [editeur,setEditeur]=useState("");
    const [image,setImage]=useState("");
    const [category,setCategory]=useState([]);
    const [selectedCat,setSelectedCat]=useState(0);
    const navigate=useNavigate();
    
    async function getCategories(){
        const res = await catServices.getAllCategories()
        setCategory(res.data)
    }
    useEffect(()=>{
        getCategories()
    },[])
    async function submitBook(e){
        e.preventDefault()
        const b = {"name":name,"description":description,"isbn":isbn,"auteur":auteur,"editeur":editeur,"image":image,"category":category[selectedCat]}
        await bookService.addBook(b)
        navigate("/admin/books")
    }
    return(
        <div className="row mt-5">
            <div className="mx-auto col-10 col-md-8 col-lg-6">
                <form onSubmit={(e)=>submitBook(e)}>
                <div className="form-group">
                    <label for="nameBookInput">Name</label>
                    <input type="text" onChange={(e)=>setName(e.target.value)} className="form-control" id="nameBookInput" placeholder="Enter Book Name"/>
                </div>
                <div className="form-group">
                    <label for="descriptionBookInput">Description</label>
                    <input type="text" onChange={(e)=>setDescription(e.target.value)} className="form-control" id="descriptionBookInput" placeholder="Enter Book Description"/>
                </div>
                <div className="form-group">
                    <label for="isbnBookInput">Isbn</label>
                    <input type="text" onChange={(e)=>setIsbn(e.target.value)} className="form-control" id="isbnBookInput" placeholder="Enter Book Isbn"/>
                </div>
                <div className="form-group">
                    <label for="auteurBookInput">Auteur</label>
                    <input type="text" onChange={(e)=>setAuteur(e.target.value)} className="form-control" id="auteurBookInput" placeholder="Enter Book auteur"/>
                </div>
                <div className="form-group">
                    <label for="editeurBookInput">Editeur</label>
                    <input type="text" onChange={(e)=>setEditeur(e.target.value)} className="form-control" id="editeurBookInput" placeholder="Enter Book editeur"/>
                </div>
                <div className="form-group">
                    <label for="imageBookInput">Image</label>
                    <input type="text" onChange={(e)=>setImage(e.target.value)} className="form-control" id="imageBookInput" placeholder="Enter Book image URL"/>
                </div>
                <div className="form-group">
                    <label for="categoryBookInput">Category</label>
                    <select onChange={(e)=>setSelectedCat(e.target.value)} className={"form-select"}>
                        {
                            category.map((elem,index)=>{
                                return <option value={index} key={index}>{elem.name}</option>
                            })
                        }
                    </select>
                </div>
                <br/>        
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>        
        </div>        
    )
}
export default BookNew