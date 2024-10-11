
export default function SimpleForm() {
    const handleSubmit=e=>{
        e.preventDefault();
        const name=e.target.name.value;
        const email=e.target.email.value
        console.log(name,email)
    }
  return (
    <div>
       <form onSubmit={handleSubmit}>
    <input type="text" name="name"/>
    <br />
    <input type="email" name="email" id="" />
    <br />
    <input type="submit" value="Submit" />

       </form>
    </div>
  )
}
