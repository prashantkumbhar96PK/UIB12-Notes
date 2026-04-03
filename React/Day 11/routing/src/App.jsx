
import { BrowserRouter,Routes,Route, Link } from 'react-router'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Courses from './components/Courses'
import ContactUs from './components/ContactUs'
import Enquiry from './components/Enquiry'

function App() {
 
  return          <BrowserRouter>
          <div className='d-flex p-4 justify-content-around '>

            <Link className='btn btn light' to='/'>Home</Link>
            <Link className='btn btn light' to='/aboutus'>AboutUs</Link>
             <Link className='btn btn light' to='/courses'>Courses</Link>
             <Link className='btn btn light' to='/contactus'>ContactUs</Link>
             <Link className='btn btn light' to='/enquiry'>Enquiry</Link>
             




            <Routes>
              <Route path='/' element={<Home/>}></Route>
               <Route path='/aboutus' element={<AboutUs/>}></Route>
                <Route path='/courses/*' element={<Courses/>}></Route>
                 <Route path='/contactus' element={<ContactUs/>}></Route>
                  <Route path='/enquiry' element={<Enquiry/>}></Route>
              




            </Routes>
          </div>

          </BrowserRouter>

  
}

export default App
