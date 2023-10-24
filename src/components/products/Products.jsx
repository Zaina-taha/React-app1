import React from 'react'
import './Products.css'
import Product from '../product/product.jsx'

export default function Products() {
  const Products=[
    {id:0,title:'product 1',desc:'This is product1',price:1000},
    {id:1,title:'product 2',desc:'This is product2',price:2000},
    {id:2,title:'product 3',desc:'This is product3',price:3000},
    {id:3,title:'product 4',desc:'This is product4',price:4000}
  ]
  return (
   <section className='products  text-color'>
    <div className="container text-center">
        <h1 className='py-3'>Products</h1>
        <div className="row text-center   ">
          {
            Products.map((product)=>{
              return <Product {...product} key={Products.id}/>
            })
          }
          
            
        </div>
    </div>

   </section>
  )
}
