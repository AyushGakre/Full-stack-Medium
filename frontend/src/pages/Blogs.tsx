import { useEffect, useState } from "react"
import BlogCard from "../components/BlogCard"
import Navbar from "../components/Navbar"
import axios from "axios";
import { BACKEND_URL } from "../config";

interface Blog{
        "id": number,
        "title": string,
        "content": string,
  
      
}
const Blogs = () => {
   const[blogs,Setblogs] = useState<Blog[]>([]);
   useEffect(()=>{
    axios.get(`${BACKEND_URL}/api/v1/blog/Bulk`,{
      headers:{
        Authorization: localStorage.getItem("token")
      }
    })
    .then(response=>{
      console.log(response.data.blogs)
      Setblogs(response.data)
    })
   },[])
  return (
    <>
    <Navbar/>
    <div className="flex flex-col space-y-4 items-center mt-10">
      {blogs.map(blog =><BlogCard
         key={blog.id}
        authorName="ayush"
        title={blog.title}
        content={blog.content}
        publishedDate="28-April"
        />)
      }
    </div>
    </>
  )
}

export default Blogs
