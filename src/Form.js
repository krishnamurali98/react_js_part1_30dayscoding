import React from 'react'

function Form() {
    
    // const [name, setName] = React.useState('')
    // const [email, setEmail] = React.useState('')
    // const [password, setPassword] = React.useState('')

    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        password: ''
    })

    const handleInput = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <form onSubmit={handleSubmit}>
        <label>
            Name: 
            <input type="text" name="name" placeholder="Enter your name" onChange={handleInput} value={formData.name}/>
        </label>
        <br /><br />
        <label>
            Email: 
            <input type="text" name="email" placeholder="Enter your email" onChange={handleInput} value={formData.email}/>
        </label>
        <br /><br />
        <label>
            Password:
            <input type="password" name="password" placeholder="Enter your password" onChange={handleInput} value={formData.password}/>
        </label>
        <br /><br />
        <button type='submit'> Submt</button>
    </form>
  )
}

export default Form
