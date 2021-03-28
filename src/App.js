import NavBar from './Components/navbar'
import Signin from './Components/screens/signin'
import SignUp from './Components/screens/signup'
import Home from './Components/screens/userHome'
import './App.css';
import React,{useEffect,createContext,useReducer,useContext} from 'react';
import { BrowserRouter, Route, Switch,useHistory } from 'react-router-dom'
import {reducer,init} from  './Components/reducers/userReducer'
export const UserContext=createContext()
const Routing =()=>{
  const history=useHistory()
  const {state,dispatch}=useContext(UserContext)
  useEffect(()=>{
      const user=JSON.parse(localStorage.getItem("User"))
      if(user){
          dispatch({type:"USER",payload:user}
          )
      }
      else
      {
          if (!history.location.pathname.startsWith('/reset'))
              history.push('/')
      }
  },[])
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/"><Signin/></Route>;
        <Route exact path='/signup'><SignUp /></Route>
        <Route exact path='/home'><Home /></Route>
      </Switch>
    </BrowserRouter>
  )
}
function App() {
  const [state,dispatch]=useReducer(reducer,init)
    return ( 
      <div className="App">
        <UserContext.Provider value={{state,dispatch}}>
      <BrowserRouter>
      <NavBar />
      <Routing />
      </BrowserRouter>
    </UserContext.Provider></div>
  );
}

export default App;
