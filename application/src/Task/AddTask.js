import React from 'react'

export default function AddTask({onCreate}) {
    const [value, setValue] = React.useState('')

    function onTaskSubmit(event) {
        event.preventDefault()

        if (value.trim()) {
            onCreate(value)
        }

        setValue('')
    }

    return (
        <form onSubmit={onTaskSubmit}>
            <input value={value} onChange={event => setValue(event.target.value)}/>
            <button type="submit">Add task</button>
        </form>
    )
}