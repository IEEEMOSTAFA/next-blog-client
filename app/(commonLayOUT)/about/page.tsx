"use client"

import { getBlogs } from "@/actions/blog.action";
import { useEffect, useState } from "react"



export default  function AboutPage() {
  // Dynamic chaile nicer line golu use korbo.
  //  await new Promise((resolve) => setTimeout(resolve,4000));
  // throw new Error("Something Went Wrong")


  const [data,setData] = useState();
  const [error, setError] = useState<{message: string} | null>(null);
  console.log(data);
  console.log(error);

  useEffect(() =>{
    (async () =>{
      const {data,error} = await getBlogs();

      setData(data);
      setError(error);
    })();
  },[]);
    
  
  
  return (
    <div>
      
      <h1>This is About Page</h1>
    </div>
  )
}
