import React from 'react'

function Form() {
    
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [form, setForm] = React.useState([])

    
    const handleName = (e) => {
        console.log(e.target.value);
        setName(e.target.value)
    }

    const handleEmail = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setForm([...form, {name, email, password}])
    }

  return (
    <form onSubmit={handleSubmit}>
        <label>
            Name: 
            <input type="text" placeholder="Enter your name" onChange={handleName} value={name}/>
        </label>
        <br /><br />
        <label>
            Email: 
            <input type="text" placeholder="Enter your email" onChange={handleEmail} value={email}/>
        </label>
        <br /><br />
        <label>
            Password:
            <input type="password" placeholder="Enter your password" onChange={handlePassword} value={password}/>
        </label>
        <br /><br />
        <button type='submit'> Submt</button>
    </form>
  )
}

export default Form
