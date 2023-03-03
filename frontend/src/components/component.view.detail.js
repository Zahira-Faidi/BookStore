import { useEffect, useState } from "react"
import {useParams } from "react-router-dom";
import bookService from "../services/book.services";
import detail from '../detail.css'
function BookDetail(){
    const [name,setName]=useState("");
    const [description,setDescription]=useState("");
    const [isbn,setIsbn]=useState("");
    const [auteur,setAuteur]=useState("");
    const [editeur,setEditeur]=useState("");
    const [image,setImage]=useState("");
    const [category,setCategory]=useState("");
    const {id}=useParams()

    useEffect(()=>{
        getBookById();
        console.log(name)
    },[])

    async function getBookById(){
        const rep=await bookService.getBookById(id)
        setName(rep.data.name)
        setDescription(rep.data.description)
        setIsbn(rep.data.isbn)
        setAuteur(rep.data.auteur)
        setEditeur(rep.data.editeur)
        setImage(rep.data.image)
        setCategory(rep.data.category.name)
        console.log(rep)
    }
    return(  
        <>
<div class="projcard-container">
		
        <div class="projcard projcard-blue">
            <div class="projcard-innerbox">
                <img class="projcard-img" src={`${image}`} />
                <div class="projcard-textbox">
                    <div class="projcard-title">{name}</div>
                    <div class="projcard-subtitle">{auteur} - {editeur}</div>
                    <div class="projcard-bar"></div>
                    <div class="projcard-description">{description}</div>
                    <div class="projcard-tagbox">
                        <span class="projcard-tag">{isbn}</span>
                        <span class="projcard-tag">{category}</span>
                    </div>
                </div>
            </div>
        </div>        
    </div>
        </>
    )
}
export default BookDetail