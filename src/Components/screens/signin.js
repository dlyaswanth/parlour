import { useState,useContext} from "react";
import {Link,useHistory} from 'react-router-dom'
import {UserContext} from '../../App'
function Signin()
{
    const {state,dispatch}=useContext(UserContext)
    const history = useHistory()
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    function postdata()
    {
        fetch("/signin",{
            method:"post",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                password,
                email
            })
            }).then(res=>res.json())
            .then(data=>{
                    localStorage.setItem("jwt",data.token)
                    localStorage.setItem("User",JSON.stringify(data.user))
                    dispatch({type:"USER",payload:data.user})
                    history.push('/')
        }).catch(error=>{
            console.log("Error Occured: ",error)
        })
    }
    return (
        <div>
            <h2 style={{float:"middle",color:"#448aff"}}><b>Login</b></h2>
            <div style={{alignContent:"center",width:"50%",marginLeft:"25%"}}>
                <div className="card" width="100%">
                    <input style={{marginLeft:"0%",width:"100%"}}className="mail" type="text" placeholder="    Enter email"
                value={email}
                onChange={(er)=>setEmail(er.target.value)} required/></div><br />
                <div className="card" >
                    
                <input style={{marginLeft:"0%"}} className="mail" type="password" placeholder="    Enter Password"
                value={password}
                onChange={(er)=>setPassword(er.target.value)} required/></div>
                <br/>
                <br />
                <button style={{fontSize:"25px",backgroundColor:"lightgrey",width:"140px",height:"45px"}} onClick={()=>postdata()}>Login</button>
                <br />
                <br />
                 <Link to="/signup"><p style={{fontSize:"25px",cursor:"pointer",color:"black"}}>New User?<span style={{color:"#448aff"}}>Sign Up</span></p></Link> 
            </div>
        </div>
    )
} 
export default Signin;