import React, { useState, useEffect } from 'react';

function UserTable() {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');
    const [sortBy, setSortBy] = useState('name');
    const [order, setOrder] = useState('asc');

    useEffect(() => {
        fetch(`https://api.example.com/v1/users?page=${page}&limit=5&sortBy=${sortBy}&order=${order}&search=${search}`)
            .then(res => res.json())
            .then(data => setUsers(data.results));
    }, [page, search, sortBy, order]);

    return (
        <div>
            <input
                type="text"
                placeholder="Search users..."
                onChange={e => setSearch(e.target.value)}
                className="border p-1"
            />
            <button onClick={() => setOrder(order === 'asc' ? 'desc' : 'asc')}>
                Toggle Order
            </button>
            <table border="1">
                <thead>
                    <tr>
                        <th onClick={() => setSortBy('name')}>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}><td>{user.name}</td><td>{user.email}</td></tr>
                    ))}
                </tbody>
            </table>
            <div>
                <button onClick={() => setPage(p => Math.max(p - 1, 1))}>Previous</button>
                <span> Page {page} </span>
                <button onClick={() => setPage(p => p + 1)}>Next</button>
            </div>
        </div>
    );
}

export default UserTable;
