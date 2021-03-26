import React from 'react'
import { useCookies } from 'react-cookie'

export default function Login() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function onSubmit(event) {
        event.preventDefault()
        fetch('http://localhost/token', {
            credentials: 'include',
        })
            .then(data => data.json())
            .then(data => {
                localStorage.setItem('XSRF-TOKEN', data.data)
            })
            .then(() => {
                fetch('http://localhost/login', {
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
                }).then()
            })
    }

    function onEmailChange(event) {
        setEmail(event.target.value)
    }

    function onPasswordChange(event) {
        setPassword(event.target.value)
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
                    <input onChange={onPasswordChange}/>
                </label>
                <p>
                    <a href="/register">Registration</a>
                </p>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}