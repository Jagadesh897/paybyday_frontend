import React, { useEffect, useState } from 'react'
import { Button } from './Button'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Users = () => {
    const [users,setUsers] = useState([])
    const [filter,setfilter] = useState("")

    useEffect(()=>{
        axios.get("https://paybyday-backend.onrender.com/api/v1/user/bulk?filter=" + filter)
            .then(response =>{
                setUsers(response.data.user)
            })
    },[filter])
    
  return (
    <>
    <div className='font-bold mt-6 text-lg'>Users</div>
    <div onChange={(e)=>{
        setfilter(e.target.value)
    }} className='my-2'><input type='text' placeholder='Search users...' className='w-full px-2 py-1 border rounded border-slate-200'></input></div>
    <div>
        {users.map(user => <User user={user}/>)}
    </div>
    </>
  )
}
function User({user}){
    const navigate = useNavigate();
    return <>

    <div className='flex justify-between'>
        <div className='flex' >
            <div className='rounded-full w-12 h-12 bg-slate-200 flex justify-center mt-1 mr-2 '><div className=' flex flex-col justify-center h-full text-lg'>{user.firstName[0]}</div></div>
            <div className='flex flex-col justify-center h-full '><div>{user.firstName} {user.lastName}</div></div>
        </div>
        <div className='flex flex-col justify-center h-full'>
            
            <Button onClick={(e)=>{
                navigate("/send?name="+ user.firstName+"&id="+user._id)
            }} label={"Send Money"}/>
        </div>
    </div>
    </>
}

export default Users