import http from "./http-common";

async function getAllCategories(){
    return await http.get("/categories")
}
async function addCategory(c){
    return await http.post("/categories",c)
}
async function updateCategory(c){
    return await http.put(`/categories/${c._id}`,c)
}
async function deleteCategory(id){
    return await http.delete(`/categories/${id}`)
}
async function getCategory(id){
    return await http.get(`/categories/${id}`)
}
const catServices={
    getAllCategories,
    addCategory,
    updateCategory,
    deleteCategory,
    getCategory
}
export default catServices