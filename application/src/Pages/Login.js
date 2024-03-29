import React from 'react'
import config from "../config";

export default function Login() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

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
                fetch('http://' + config().host + '/login', {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'X-CSRF-TOKEN': localStorage.getItem('XSRF-TOKEN'),
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password
                    })
                }).then(data => {
                    if (data.status === 401) {
                        alert('Wrong password or email')
                    } else {
                        window.location = "/"
                    }
                })
            })
    }

    return (
        <div className="wrapper">
            <h1>Login</h1>
            <form onSubmit={onSubmit}>
                <label>
                    <p>Email</p>
                    <input onChange={onEmailChange}/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={onPasswordChange}/>
                </label>
                <p>
                    <a href="/register">Registration</a>
                </p>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}