

export default function RefForm() {
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
