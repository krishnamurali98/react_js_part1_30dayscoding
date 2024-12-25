import React, { useEffect, useState } from 'react'

function MultipleReturn() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://api.github.com/users');
                if (!response.ok) {
                    throw new Error('Something went wrong');
                }
                const data = await response.json();
                setUsers(data);
                setIsLoading(false);
            } catch (error) {
                setError(error.message);
                setIsLoading(false);
            }
        }
        fetchData();
    }, [])
    if(isLoading) {
        return <p>Loading...</p>
    }
    if(error) {
        return <p>{error.message}</p>
    }

    return (
        <div>
            <h1>Users List</h1>
            <ul>
                {users.map(user => {
                    return <li key={user.id}>{user.login}</li>
                })}
            </ul>
        </div>
    )
}

export default MultipleReturn
