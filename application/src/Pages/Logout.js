import React from 'react'

export default function Logout() {

    fetch('http://localhost/token', {
        credentials: 'include',
    })
        .then(data => data.json())
        .then(data => {
            localStorage.setItem('XSRF-TOKEN', data.data)
        })
        .then(() => {
            fetch('http://localhost/logout', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'X-CSRF-TOKEN': localStorage.getItem('XSRF-TOKEN')
                },
            })
                .then(() => {
                    localStorage.clear()
                    window.location = '/login'
                })
        })

    return ''

}