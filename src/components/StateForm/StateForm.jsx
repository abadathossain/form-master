import { useState } from "react"


export default function StateForm() {
    const [email, setEmail]=useState(null)

    const handleSubmit=e=>{
        e.preventDefault();
        console.log(email)
    }

    const handleChange=e=>{
        console.log(e.target.vlaue)
        setEmail(e.target.vlaue)
        // console.log(email)
    }
  return (
    <div>
       <form onSubmit={handleSubmit}>
    <input type="text" name="name"/>
    <br />
    <input onChange={handleChange} type="email" name="email" id="" />
    <br />
    <input type="submit" value="Submit" />

       </form>
    </div>
  )
}
