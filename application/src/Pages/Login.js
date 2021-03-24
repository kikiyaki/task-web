import React from 'react'

export default function Login() {
    return (
        <div className="wrapper">
            <h1>Login</h1>
            <form>
                <label>
                    <p>Login</p>
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