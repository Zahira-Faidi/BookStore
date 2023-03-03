import { Link, Outlet } from "react-router-dom"
function AdminLayout(){
    return(
        <>
            <div style={{borderBottom:"1px solid white"}}>
                <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container">
                    <a className="navbar-brand text-white" href="/#">BookStore</a>
                    <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-filter-circle-fill" viewBox="0 0 16 16">
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM3.5 5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zM5 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm2 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={`/admin/home`} className="nav-link active text-white" aria-current="page">HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/admin/books`} className="nav-link text-white">BOOKS</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/admin/category`} className="nav-link text-white">CATEGORIES</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/admin/users`} className="nav-link text-white">USERS</Link>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
            </div>
            <Outlet/>
        </>
    )
}
export default AdminLayout
