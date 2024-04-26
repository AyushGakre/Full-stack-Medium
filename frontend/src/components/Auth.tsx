import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom"


const Auth = ({type}: {type : "signin" | "signup"}) => {
    const[postInput, setInput] = useState(
        {
            name:"",
            username: "",
            password: ""
        }
    )
  return (
    <div className="h-screen flex justify-center flex-col">
        {/* {JSON.stringify(postInput)} */}
        <div className="flex justify-center">
            <div >
            <div className="text-3xl font-bold ml-6">{type === 'signin'? "Log In to Account" : "Create an Account"}</div>
            <div className="font-extralight text-slate-500 mt-1 ml-8">{type === 'signin'? "Don't Have Account ?" : "Already have an Account ?"} {type === 'signup' && <Link to={"/signin"} className=" underline">Login</Link>}{type === 'signin' && <Link to={"/signup"} className=" underline">Register</Link>}</div>
            <div className=" pt-4">
            <LabelledInput label="Username" placeholder="" onChange={(e)=>{
                setInput({
                    ...postInput,
                    name:e.target.value
                })
            }}></LabelledInput>
            <LabelledInput label="Email" placeholder=""  onChange={(e)=>{
                setInput({
                    ...postInput,
                    username:e.target.value
                })
            }}></LabelledInput>
            <LabelledInput label="Password" placeholder="" type="password"  onChange={(e)=>{
                setInput({
                    ...postInput,
                    password:e.target.value
                })
            }}></LabelledInput>
            </div>
            <button
            className=" mt-4  select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-32 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            >
            {type === "signin" ? "Sign In" : "Sign Up"}
            </button>
            </div>
        </div>
        
    </div>
  )
}
interface labelled{
label:string,
placeholder: string,
onChange: (e:ChangeEvent<HTMLInputElement>) => void;
type?:string
}
function LabelledInput({label,placeholder,onChange ,type}:labelled){
    return(
        <div className=" w-80 mt-6">
  <div className="relative w-full min-w-[200px] h-10">
    <input onChange={onChange} type={type}
      className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-400 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900 bg-gray-100"
      placeholder={placeholder} />
      <label
      className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">{label}
    </label>
  </div>
</div> 
    )

}
export default Auth