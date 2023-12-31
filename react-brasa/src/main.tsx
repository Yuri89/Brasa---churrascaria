import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from './pages/Home';
import Header from './components/header';
import Footer from './components/footer';

import './index.css'
import Pratos from './pages/Pratos';
import Prato from './pages/Prato';
import PageError from './pages/pageError';
import Contato from './pages/Contato';
import Faq from './pages/Faq';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='Pratos/:prato' element={<Pratos/>}/>
      <Route path='Pratos/:retornoPrato/:nomeDoPrato' element={<Prato/>}/>
      <Route path='Contato' element={<Contato/>}/>
      <Route path='Faq' element={<Faq/>}/>
      <Route path='*' element={<PageError/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
)
