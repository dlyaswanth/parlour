import React,{useContext} from 'react'
import {Link,useHistory} from 'react-router-dom'
import { UserContext } from '../App'
function Navbar()
{
  const {state,dispatch}=useContext(UserContext)
  const history=useHistory()
  const renderList=()=>{
    if(state){
        return [
          <Link to="/"  style={{float:"left",marginLeft:"0%",fontSize:"30px"}}>Beautician System</Link>,
          <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li key="2"><Link to = "/home"><p>Home</p></Link> </li >,
          <li key="3"><Link to = "/report"><p>Report</p></Link> </li >,
          <li key="3"><p  onClick={()=>{
                    localStorage.clear();
                    dispatch({type:"CLEAR"})
                    history.push('/')}}>logout</p></li>,
        </ul>
        ]
    }
    else{
        return [
          <Link to="/"  style={{float:"left",marginLeft:"0%",fontSize:"30px"}}>Beautician System</Link>
        ]
    }
}
    return (
    <nav>
    <div className="nav-wrapper" style={{backgroundColor:"#448aff"}}>
    {renderList()}
    </div>
  </nav>)
}
export default Navbar;