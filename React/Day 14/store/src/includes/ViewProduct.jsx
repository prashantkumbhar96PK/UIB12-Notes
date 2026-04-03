import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function ViewProduct() {


  let [products,setProducts]=useState([])
function getProducts()
{
  axios.get('http://localhost:5000/products')
  .then(res=> setProducts(res.data))
  .catch(err=> console.log(err)
  )
}

useEffect(getProducts,[]);


function deleteProduct(id)
{
  axios.delete('http://localhost:5000/products/'+id)
  .then((res)=>{
    if(res.status===200)
    {
      getProducts();
    }
  })
  .catch((err)=>{console.log(err)})
}



  return (
    <div>
      <div className='pt-3'>
        <h1 className='text-center fs-3 text-warning'>All Products of a Store</h1>
       

        <table className='table table-bordered table-striped table-hover shadow'>
          <thead>
            <tr>
              <th>SR No</th>
              <th>Product Name</th>
              <th>Description</th>
              <th>Category</th>
              <th>Price</th>
              <th>Supplier</th>
              <th>Is Avaible?</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
                  products.map((prod,index)=>
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{prod.productName}</td>
                        <td>{prod.description}</td>
                        <td>{prod.category}</td>
                        <td>{prod.price}</td>
                        <td>{prod.supplier}</td>
                        <td>
                          <input type="checkbox"  checked={prod.inStock} readOnly/>
                        </td>
                        <td>
                          <Link  to={`/edit/${prod.id}`}> <button className='btn btn-outline-primary me-3'> <i className='bi bi-pen-fill'></i> </button></Link>
                          <Link> <button className='btn btn-outline-danger' onClick={()=>deleteProduct(prod.id)}><i className='bi bi-trash-fill'></i></button></Link>
                        
                        </td>

                    </tr>
                  )
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ViewProduct