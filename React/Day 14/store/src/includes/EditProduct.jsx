import axios from 'axios';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

function EditProduct() {
  let {id}=useParams();
let {register,reset,handleSubmit,setValue}=useForm();
let navigate=useNavigate();
let getPrevData =()=>{
  axios.get(`http://localhost:5000/products/${id}`)
  .then((res)=>{
    if(res.status===200)
    {
      for(let prop in res.data)
      {
        setValue(prop,res.data[prop])
      }
    }
  })
    .catch((err)=>{console.log(err)})
}
useEffect(()=>{getPrevData()},[id]);

function updateData(data)
{
  axios.put(`http://localhost:5000/products/${id}`,data)
  .then((res)=>{
    if(res.status===200)
      navigate('/view');
  })
}

function clearForm()
{
  reset();
}
  return (
    <div className="d-flex justify-content-center">
      <div className="w-50 border border-white mt-3 p-3">
        <h1 className="text-warning text-center fs-3">
          <i className="bi bi-box-fill"></i>&nbsp;
          Edit Product Data
        </h1>


     
        <form onSubmit={handleSubmit(updateData)}>
          <div className="mb-3">
            <label htmlFor="prodName" className="form-label">Enter Product Name:</label>
            <input
              type="text"
              className="form-control"
              id="prodName"
              {...register("productName")}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="desc" className="form-label">Enter Product Description:</label>
            <input
              type="text"
              className="form-control"
              id="desc"
              {...register("description")}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="category" className="form-label">Enter Product Category:</label>
            <input
              type="text"
              className="form-control"
              id="category"
              {...register("category")}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="price" className="form-label">Enter Product Price:</label>
            <input
              type="number"
              className="form-control"
              id="price"
              {...register("price")}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="supp" className="form-label">Enter Supplier Name:</label>
            <input
              type="text"
              className="form-control"
              id="supp"
              {...register("supplier")}
            />
          </div>

          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="stock"
              {...register("inStock")}
            />
            <label htmlFor="stock" className="form-check-label">Is product in stock?</label>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-success w-25">
              Update
            </button>
            &nbsp; &nbsp;
            <button className="btn btn-danger w-25" onClick={clearForm}>Clear</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditProduct