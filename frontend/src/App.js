import './App.css';
import AdminLayout from './components/component.admin.layout';
import { Route, Routes} from 'react-router-dom';
import BookList from './components/component.book.list';
import BookNew from './components/component.book.new'
import Home from './components/component.home';
import BookUpdate from './components/component.book.update';
import CategoryList from './components/component.category.list'
import  CatNew from './components/component.category.new';
import CatUpdate from './components/component.category.update'
import Navbar from './components/component.navbar'
import BookCard from './components/component.book.card'
import BookDetail from './components/component.view.detail'
import UserList from './components/component.user.list'
import UserNew from './components/component.user.add'
function App() {
  return (
    <>
      <Routes>
        
        <Route path={'/admin'} element={<AdminLayout/>}>
        <Route path={'books'} element={<BookList/>}></Route>
          <Route path={'home'} element={<Home/>}></Route>
          <Route path={'books/new'} element={<BookNew/>}></Route>
          <Route path={'books/edit/:id'} element={<BookUpdate/>}></Route>
          <Route path={'category'} element={<CategoryList/>}></Route>
          <Route path={'category/new'} element={< CatNew/>}></Route>
          <Route path={'category/edit/:id'} element={<CatUpdate/>}></Route>
          <Route path={'users'} element={<UserList/>}></Route>
          <Route path={'user/new'} element={<UserNew/>}> </Route>
        </Route>
        
        <Route path='/' element={<Navbar/>}>
          <Route path={'home'} element={<Home/>}></Route>
          <Route path={'books'} element={<BookCard/>}></Route>
          <Route path={'detail/:id'} element={<BookDetail/>}></Route>
        </Route>
      
      </Routes>
    </>
  ); 
}

export default App;
