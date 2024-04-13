import React from 'react'
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm"
import "./Header.css"
function Header() {
  return (
    <div className='holder'>
      <header className='header'>
        <Navbar />
        <div className="header-contrnt flex flex-c text-center text-white">
          <h2 className="title-header text-capitalize">
            fint your book of choice
          </h2>
          <br />
          <p className="header-text fs-18 fw-3 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, nemo ipsa iusto iste 
          </p>
          <SearchForm />


        </div>
      </header>
    </div>
  )
}

export default Header