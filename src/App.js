import React, {useState} from "react";
import "./styles.css";
import UserList from "./UserList";
import { UserContext } from "./contexts/UserContext";


//import './App.css';
//import ClassComponent from './ClassComponent';
//import FunctionalComponent from './FunctionalComponent';

const data=[
  {id:1, name:"Alpay", email:"alpay@gmail.com", age:40, color:"lightcyan"},
  {id:2, name:"Derya", email:"alpay@gmail.com", age:40, color:"yellow"},
  {id:3, name:"Can", email:"alpay@gmail.com", age:40, color:"red"},
  {id:4, name:"Umay", email:"alpay@gmail.com", age:40, color:"black"},
  {id:5, name:"katre", email:"alpay@gmail.com", age:40, color:"cyan"},
  {id:6, name:"Umut", email:"alpay@gmail.com", age:40, color:"purple"},

]
function App() {
 const [users, setUsers]= useState(data);

 const changeColor= (id, color)=>
 setUsers(
  users.map(user=>(user.id===id?{...user, color:color}: user))
 );

  return (
    <UserContext.Provider value={{users,  changeColor}}>
    <div className="App">
      {/* <header className="App-header">
        <div className='main-box red'>
            <ClassComponent/>
        </div>
        <div className='main-box blue'>
            <FunctionalComponent/>
        </div>
      </header> */}
      <header>
        <h1>Welcome</h1>
        <UserList />
      </header>
    </div>
    </UserContext.Provider>
  );
}

export default App;
