import { Link} from "react-router-dom"

function Home(){
    return (
        <div className="Home-Page">
                <div className="container align-items-center">
                        <div
                            className="d-flex justify-content-center align-items-center flex-column text-white"
                            style={{height:"92.75vh"}}
                        >
                            <div className="card">
                                <h2 style={{fontSize:"80px"}}>BOOK STORE</h2>
                                <h3 style={{fontSize:"50px"}}>FOR YOU</h3> 
                                <h4 className="mb-0 text-white">Checkout The Books From Here.</h4>      
                                <div><Link to={`/books`}> <button className="viewBook my-3">View Books</button></Link></div>
                            </div>
                        </div> 
                </div> 
        </div>
    )
}

export default Home