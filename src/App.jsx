import { useState, useeffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import api from '../api/axiosConfig'
import home from "./home";
import userform from "./userform";
import usertable  from "./usertable";


export default App()
{
  const[users, setusers]=usestate([]);
    const[edit, setedit]=usestate([]);

    const load =()=>api.get("/users").then(r=>setusers(r.data));
    useeffect(load, []);

    return (
      <>

      <home reload={()=>}></home>
      <userform reload={load} edit={edit}></userform>
      <usertable users = {users} edituser ={setedit} reload ={load}></usertable>
      </>
    );
}