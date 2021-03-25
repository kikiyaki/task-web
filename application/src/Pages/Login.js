import React from 'react'
import { useCookies } from 'react-cookie'

export default function Login() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [cookies, setCookie] = useCookies(['name']);

    function onSubmit(event) {
        event.preventDefault()
        fetch('http://localhost/token', {
            credentials: 'include',
        })
            .then(data => data.json())
            .then(data => {
                setCookie('XSRF-TOKEN', data.data)
            })
    }

    return (
        <div className="wrapper">
            <h1>Login</h1>
            <form onSubmit={onSubmit}>
                <label>
                    <p>Email</p>
                    <input/>
                </label>
                <label>
                    <p>Password</p>
                    <input/>
                </label>
                <p>
                    <a href="/register">Registration</a>
                </p>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}