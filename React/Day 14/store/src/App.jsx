
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import Header from './components/Header'
import AddProduct from './includes/AddProduct'
import ViewProduct from './includes/ViewProduct'
import EditProduct from './includes/EditProduct'
function App() {


  return <div>
    <BrowserRouter>
    <Header/>
    <Routes>
      
      <Route path='/add' element={<AddProduct/>}></Route>
       <Route path='/view' element={<ViewProduct/>}></Route>
      <Route path='/edit/:id' element={<EditProduct/>}></Route>
       
    </Routes>
    
    
    
    </BrowserRouter>
  </div>
}

export default App
