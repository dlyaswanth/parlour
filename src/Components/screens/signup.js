import { useState} from "react";
import {Link,useHistory} from 'react-router-dom'
function Signup()
{
    const [name,setName]=useState('');
    const history = useHistory()
    const [num,setNum]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPas,setConfirmPas]=useState('');
    function postdata()
    {
        fetch("/signup",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                password,
                num,
                email,
            })
            }).then(res=>res.json())
            .then(data=>{
                history.push('/')
        }).catch(error=>{
            console.log("Error Occured: ",error)
        })
    } 
    return (
        <div>
            <h2 style={{float:"middle",color:"#448aff"}}><b>Sign Up</b></h2>
            <div style={{alignContent:"center",width:"50%",marginLeft:"25%"}}>
            <div className="card" width="100%">
                    <input style={{marginLeft:"0%",width:"100%"}}className="mail" type="text" placeholder="    Enter email"
                value={email}
                onChange={(er)=>setEmail(er.target.value)} required/></div><br />
                <div className="card" width="100%">
                    <input style={{marginLeft:"0%",width:"100%"}}className="mail" type="text" placeholder="    Enter Username"
                value={name}
                onChange={(er)=>setName(er.target.value)} required/></div><br />
                 <div className="card" width="100%">
                    <input style={{marginLeft:"0%",width:"100%"}}className="mail" type="text" placeholder="    Enter Mobilenumber"
                value={num}
                onChange={(er)=>setNum(er.target.value)} required/></div><br />
                <div className="card" >
                    
                <input style={{marginLeft:"0%"}} className="mail" type="password" placeholder="    Password"
                value={password}
                onChange={(er)=>setPassword(er.target.value)} required/></div>
                <br/>
                <div className="card" >
                    
                <input style={{marginLeft:"0%"}} className="mail" type="password" placeholder="    Confirm Password"
                value={confirmPas}
                onChange={(er)=>setConfirmPas(er.target.value)} required/></div>
                <br/>
                <br />
                <br />
                <button style={{fontSize:"25px",backgroundColor:"lightgrey",width:"140px",height:"45px"}} onClick={()=>postdata()}>Submit</button>
                <br />
                <br />
                <Link to="/"><p style={{fontSize:"25px",cursor:"pointer",color:"black"}}>Already a user?<span style={{color:"#448aff"}}>Login</span></p></Link>
            </div>
        </div>
    )
}
export default Signup;