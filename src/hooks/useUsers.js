import { useEffect, useState } from 'react';
import { getUsers } from '../services/api';

export function useUsers(query = '') {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getUsers(query).then(data => {
            setUsers(data.results);
            setLoading(false);
        });
    }, [query]);

    return { users, loading };
}
