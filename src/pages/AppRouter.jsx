import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './Main'
import About from './About'
import NewProduct from './NewProduct'
import UpdateProduct from './UpdateProduct'
import Navbar from '../components/Navbar'
import ProductList from './ProductList'

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Navbar/>
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/new-product' element={<NewProduct/>}/>
            <Route path='/products' element={<ProductList/>}/>
            <Route path='/update-product/:title' element={<UpdateProduct/>}/>
            <Route path='*' element={<Main/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter