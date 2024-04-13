import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AppProvider } from './ConText.js';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import BookList from "./Component/BookList/Booklist.jsx";
import BookDetalis from "./Component/BookDetalis/BookDetalis"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route />
        <Route path="/" element={<Home />}>
          <Route path="about" element={<About />} />
          <Route path="book" element={<BookList />} />
          <Route path="/book/:id" element={<BookDetalis />} />
        </Route>

      </Routes>

    </BrowserRouter>


  </AppProvider>

);

