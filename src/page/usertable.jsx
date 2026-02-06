import api from '../api/axiosConfig'
export default({users, edituser,reload})=>(
    <table >
        <thead>
            <tr>
                <th>#</th>
                <th>name</th>
                <th>salary</th>
                <th>mobile</th>
                <th>pic</th>
                <th>edit</th>
                <th>delete</th>
            </tr>
        </thead>
        <tbody>
            {users.map((u,i)=>(
                <tr key={u.id}>
                <td>{i+1}</td>
                <td>{u.name}</td>
                <td>{u.salary}</td>
                <td>{u.mobile}</td>
                <td><img src={u.img} width="50px"></img></td>
                <td><button onclick={()=>edituser(u)}></button></td>
                <td><button onclick={async()=>{await api.delete('/users/${u.id}; reload();}}}><button</td>
                 </tr>   
            ))}
        </tbody>
    </table>
);