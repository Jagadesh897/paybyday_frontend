
import { Heading } from '../components/Heading'
import { SubHeading } from '../components/SubHeading'
import { InputBox } from '../components/InputBox'
import { Button } from '../components/Button'
import { BottomWarning } from '../components/BottomWarning'
import { useEffect, useState } from 'react'
import axios from "axios"
import {  useNavigate } from 'react-router-dom'
const Signup = () => {
    
    const [firstName,setfirstName] = useState("")
    const [lastName,setlastName] = useState("")
    const [username,setusername] = useState("")
    const [password,setpassword] = useState("")
    const navigate = useNavigate();
    
  

    useEffect(() => {
      if (localStorage.getItem("token")) {
        navigate("/dashboard");
      }
    }, [navigate]);
    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign up"}/>
        <SubHeading label={"Enter your infromation to create an account"} />
        <InputBox onChange = {(e)=>{
          setfirstName(e.target.value)
        }} 
        placeholder="John" label={"First Name"} />
        <InputBox onChange={(e)=>{
          setlastName(e.target.value)
        }} placeholder="Doe" label={"Last Name"} />
        <InputBox onChange={(e)=>{
          setusername(e.target.value)
        }} placeholder="Jagadesh809n@gmail.com" label={"Email"} />
        <InputBox onChange={(e)=>{
          setpassword(e.target.value)
        }} placeholder="123456" label={"Password"} />
        <div className="pt-4">
          <Button onClick={async()=>{
            const response = await axios.post("https://paybyday-backend.onrender.com/api/v1/user/signup",{
              username,
              firstName,
              lastName,
              password
          });
          localStorage.setItem("token",response.data.token)
          localStorage.setItem("name",username)
          navigate("/dashboard")
          }}
          
          label={"Sign up"} />
        </div>
        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to ={"/signin"} />
      </div>
    </div>
  </div>
}

export default Signup;