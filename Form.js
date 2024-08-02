import React, {useState} from 'react'

const Form = () => {
const [name, setName] = useState("");
const [Email, setEmail] = useState("");
const handleName = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
}

const handleEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
}
  return (
    <div>
        <label>
            Name:
          <input type='text' value= {name} onChange={handleName} />
        </label>
        <br/>
        <label>
            Email:
          <input type='text' value= {Email} onChange={handleEmail} />
        </label>
    </div>
  )
}

export default Form
