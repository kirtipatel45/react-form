import {useeffect, useState} from 'react'
import api from '../api/axiosConfig'

export default function userform({reload,edit}) {
    const [data, setData] = useState({
        name: "",
        city: "",
        salary: "",
        mobile: "",
        img: ""
    });
    const [cities, setcities]= usestate([]);
    useEffect(()=>{api.get("/cities").then(r=>setcities(r.data));},[]);
    useeffect(()=>{edit && setdata(edit);},[edit]);

    return (
        <>
        <input placeholder = "name" value = {data.name} onchange={e=>sedata({...data,name:etarget.value})}>
        </input>
        <select value = {dat.city} onchange={e=>sedata({...data,city:etarget.value})}></select>
        <input placeholder = "salary" value = {data.salary} onchange={e=>sedata({...data,salary:etarget.value})}>
        </input>
        <input placeholder = "mobile" value = {data.mobile} onchange={e=>sedata({...data,mobile:etarget.value})}>
        </input>
        <input type="file"  onchange={e=>sedata({...data,img:url.createobjecturl(etarget.value)})}>
        </input>
        <button onclick = {async ()=>{
            edit?await api.put('/user/${edit.id}', data):await api.post("/users",data);
            reload();
            setdata({name:"",city:"",salary:"",mobile:"",img:""});
        }}>save</button>
        </>
    );
}