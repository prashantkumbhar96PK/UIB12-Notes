import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <nav className='bg-primary d-flex p-2 ps-4'>
        <div className='w-50 d-flex justify-content-between'>
           <h1 className='text-white'>
             <i className='bi bi-shop'></i>
           </h1>
           <h1>Store Management App</h1>
        </div>
        <div className='w-50 text-end me-5 mt-2'>
          <Link className='btn btn-light me-2 ' to='/add'>Add Product</Link>
          <Link className='btn btn-light' to='/view'>View Product</Link>
        </div>

      </nav>



    </div>
  )
}

export default Header