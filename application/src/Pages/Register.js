import React from 'react'

export default function Register() {
    return (
        <div className="wrapper">
            <h1>Registration</h1>
            <form>
                <label>
                    <p>Name</p>
                    <input/>
                </label>
                <label>
                    <p>Email</p>
                    <input/>
                </label>
                <label>
                    <p>Password</p>
                    <input/>
                </label>
                <br/><br/>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}