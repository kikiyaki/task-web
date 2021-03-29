import React from 'react'
import config from "../config";

export default function Register() {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function onNameChange(event) {
        setName(event.target.value)
    }

    function onEmailChange(event) {
        setEmail(event.target.value)
    }

    function onPasswordChange(event) {
        setPassword(event.target.value)
    }

    function onSubmit(event) {
        event.preventDefault()
        fetch('http://' + config().host + '/token', {
            credentials: 'include',
        })
            .then(data => data.json())
            .then(data => {
                localStorage.setItem('XSRF-TOKEN', data.data)
            })
            .then(() => {
                fetch('http://' + config().host + '/register', {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'X-CSRF-TOKEN': localStorage.getItem('XSRF-TOKEN'),
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        password: password
                    })
                })
                    .then(data => {
                        if (data.status === 200) {
                            window.location = '/'
                        }
                        return data
                    })
                    .then(data => {
                        if (data.status === 422) {
                            return data.json().then(data => alert(data.error))
                        }
                    })
            })
    }

    return (
        <div className="wrapper">
            <h1>Registration</h1>
            <form onSubmit={onSubmit}>
                <label>
                    <p>Name</p>
                    <input onChange={onNameChange}/>
                </label>
                <label>
                    <p>Email</p>
                    <input onChange={onEmailChange}/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={onPasswordChange}/>
                </label>
                <br/><br/>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}