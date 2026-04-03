import React from 'react'
import { Link, Route, Routes } from 'react-router'
import Java from '../Java'
import Python from '../Python'
import Mern from '../Mern'

function Courses() {
  return   <div>

        <Link className='btn btn light' to='/courses/java'>Java</Link>
            <Link className='btn btn light' to='/courses/python'>Python</Link>
             <Link className='btn btn light' to='/courses/mern'>MERN</Link>
             
             <Routes>
              <Route path='/java' element={<Java/>}></Route>
              <Route path='/python' element={<Python/>}></Route>
              <Route path='/mern' element={<Mern/>}></Route>
             </Routes>
  </div>

  
}

export default Courses