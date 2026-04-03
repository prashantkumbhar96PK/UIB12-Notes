function Header(props)
{


  
  return  (
  <div>
      <h1>Header Component</h1>
      <h2>{props.brand}</h2>
      <h2>{props.branch}</h2>
  </div>
  )
  
}
export default Header;

