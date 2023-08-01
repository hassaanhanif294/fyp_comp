import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import ProductCard from '../componenets/Productcard/ProductCard'
export default function Favourites() {
  return (
    <div>
      <Header />
      <Navbar />
      <br/>
      <div className='container shadow'>
        <div className='row '>        
          <p className='h1 text-italic mt-4 text-success'>Your's Favourites</p>
        </div>
        <hr/>
        <div className='row'>
          <ProductCard />


        </div>


      </div>
            
    </div>
  )
}
