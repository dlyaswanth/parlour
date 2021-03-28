import {useState,useEffect} from 'react'
function UserHome()
{
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('/users',{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            setData(result.posts)
        })
    },[])
    return (
        <div className="row">
            {
                data.map(item=>
                {
                    return (
                        <div className="column">
                        <div className="cardhome" key={item.id}>
                            <img src={item.user.pic} alt="image" style={{borderRadius:"50%"}}/>
                            <p>{item.user.Name}</p>
                            <p>{item.user.year}</p>
                            <p>{item.user.beautician}</p>
                        </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default UserHome;