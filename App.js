import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import BookDirectoryComponent from "./components/BookDirectoryComponent/BookDirectoryComponent";
import BookRegistrationComponent from "./components/BookRegistrationComponent/BookRegistrationComponent";
import BookDeletionComponent from "./components/BookDeletionComponent/BookDeletionComponent";

function App() {
  return (
    <Router>
       <div className='container'>
        <HeaderComponent/>
       
       <nav className='nav-menu'>
        <Link to='/'>Book Repository</Link>
        <Link to='/admin/add'>Add Books</Link>
        <Link to='/admin/delete'>Delete Books</Link>
       </nav>
       <Routes>
        <Route exact path ='/' element={<BookDirectoryComponent/>}></Route>
        <Route path ='/admin/add' element={<BookRegistrationComponent/>}></Route>
        <Route path ='/admin/delete' element={<BookDeletionComponent/>}></Route>
       </Routes>
       </div>
    </Router>
  );
}

export default App;
