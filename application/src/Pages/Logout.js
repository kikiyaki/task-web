import React from 'react'
import config from "../config";

export default function Logout() {

    fetch('http://' + config().host + '/token', {
        credentials: 'include',
    })
        .then(data => data.json())
        .then(data => {
            localStorage.setItem('XSRF-TOKEN', data.data)
        })
        .then(() => {
            fetch('http://' + config().host + '/logout', {
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