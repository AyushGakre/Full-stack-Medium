import axios from "axios";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate} from "react-router-dom"
import LabelledInput from "./LabelledInput";
import { BACKEND_URL } from "../config";
import {  SignupType } from "@ayushgakre/comman";

const Auth = ({type}: {type : "signin" | "signup"}) => {
    const navigate = useNavigate()
    const[postInput, setInput] = useState<SignupType>(
        {
            name:"",
            email: "",
            password: ""
        }
    )
    const request = async() =>{
        try{
        const response  = await axios.post(`${BACKEND_URL}/api/v1/user/${type === 'signin'? "signin": "signup"}`,{
            postInput
        })
        const jwt = response.data;
        alert(jwt)
        localStorage.setItem("token",jwt)
        navigate('/blogs')
    }
    catch{
        alert("check credentials")
    }
    }
  return (
    <div className="h-screen flex justify-center flex-col">
        {/* {JSON.stringify(postInput)} */}
        <div className="flex justify-center">
            <div >
            <div className="text-3xl font-bold ml-6">{type === 'signin'? "Log In to Account" : "Create an Account"}</div>
            <div className="font-extralight text-slate-500 mt-1 ml-8">{type === 'signin'? "Don't Have Account ?" : "Already have an Account ?"} {type === 'signup' && <Link to={"/signin"} className=" underline">Login</Link>}{type === 'signin' && <Link to={"/signup"} className=" underline">Register</Link>}</div>
            <div className=" pt-4">
                { type === "signup" &&
            <LabelledInput label="Username" placeholder="" onchange={(e)=>{
                setInput({
                    ...postInput,
                    name:e.target.value
                })
            }}></LabelledInput>
        }
            <LabelledInput label="Email" placeholder=""  onchange={(e)=>{
                setInput({
                    ...postInput,
                    email:e.target.value
                })
            }}></LabelledInput>
            <LabelledInput label="Password" placeholder="" type="password"  onchange={(e)=>{
                setInput({
                    ...postInput,
                    password:e.target.value
                })
            }}></LabelledInput>
            </div>
            <button
            onClick={request}
            className=" mt-4 select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-32 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            >
            {type === "signin" ? "Sign In" : "Sign Up"}
            </button>
            </div>
        </div>
        
    </div>
  )
}

export default Auth