import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import bookService from "../services/book.services";
import catServices from "../services/category.services"
function BookUpdate(){
    const [name,setName]=useState("");
    const [description,setDescription]=useState("");
    const [isbn,setIsbn]=useState("");
    const [auteur,setAuteur]=useState("");
    const [editeur,setEditeur]=useState("");
    const [image,setImage]=useState("");
    const [category,setCategory]=useState({});
    const [categories,setCategories]=useState([]);
    const [selectedCat,setSelectedCat]=useState(0);
    const navigate=useNavigate();
    const {id}=useParams()
    async function getCategories(){
        const res = await catServices.getAllCategories()
        setCategories(res.data)
    }
    useEffect(()=>{
        getCategories()
        getBookById();
    },[])

    async function getBookById(){
        const rep=await bookService.getBookById(id)
        setName(rep.data.name)
        setDescription(rep.data.description)
        setIsbn(rep.data.isbn)
        setAuteur(rep.data.auteur)
        setEditeur(rep.data.editeur)
        setImage(rep.data.image)
        setCategory(rep.data.category)
        setSelectedCat(categories.findIndex((elem,index)=>elem._id===category._id))
    }
    async function submitBook(e){
        try{
            e.preventDefault()
            const b = {"_id":id,"name":name,"description":description,"isbn":isbn,"auteur":auteur,"editeur":editeur,"image":image,"category":categories[selectedCat]}
            await bookService.updateBook(b)
            navigate("/admin/books")
        }catch(error){
            console.log(error)
        }
    }
    return( 
        <div className="row">
            <div className="mx-auto col-10 col-md-8 col-lg-6">
                <form onSubmit={(e)=>submitBook(e)}>
                <br/><br/>
                <div className="form-group">
                    <label for="nameBookInput">Name</label>
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" id="nameBookInput" placeholder="Enter Book Name"/>
                </div>
                <div className="form-group">
                    <label for="descriptionBookInput">Description</label>
                    <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} className="form-control" id="descriptionBookInput" placeholder="Enter Book Description"/>
                </div>
                <div className="form-group">
                    <label for="isbnBookInput">Isbn</label>
                    <input type="text" value={isbn} onChange={(e)=>setIsbn(e.target.value)} className="form-control" id="isbnBookInput" placeholder="Enter Book Isbn"/>
                </div>
                <div className="form-group">
                    <label for="auteurBookInput">Auteur</label>
                    <input type="text" value={auteur} onChange={(e)=>setAuteur(e.target.value)} className="form-control" id="auteurBookInput" placeholder="Enter Book auteur"/>
                </div>
                <div className="form-group">
                    <label for="editeurBookInput">Editeur</label>
                    <input type="text" value={editeur} onChange={(e)=>setEditeur(e.target.value)} className="form-control" id="editeurBookInput" placeholder="Enter Book editeur"/>
                </div>
                <div className="form-group">
                    <label for="imageBookInput">Image</label>
                    <input type="text" value={image} onChange={(e)=>setImage(e.target.value)} className="form-control" id="imageBookInput" placeholder="Enter Book image URL"/>
                </div>
                <div className="form-group">
                    <label for="categoryBookInput">Category</label>
                    <select onChange={(e)=>setSelectedCat(e.target.value)} className={"form-select"}>
                        {
                            categories.map((elem,index)=>{
                                if(elem._id===category._id){
                                    return <option value={index} selected key={index}>{elem.name}</option>
                                }
                                else
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
export default BookUpdate