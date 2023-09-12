import { useQuery } from '@tanstack/react-query';
import React from 'react';
import axios from 'axios';

const fetchUsersData = (email) => {
    return axios.get(`http://localhost:4001/users/${email}`)
}

const fetchLanguagesData = (gitId) => {
    return axios.get(`http://localhost:4001/programming/${gitId}`)
}

const DependentQueries = ({ email }) => {
    const { data: user } = useQuery(['user-data', email], () => fetchUsersData(email));
    console.log("user", user);
    const gitId = user?.data.gitId
    const { data: languages } = useQuery({ queryKey: ['languages', gitId], queryFn: () => fetchLanguagesData(gitId), enable: !!gitId })
    return (
        <div>
            <h1>hello</h1>
        </div>
    );
};

export default DependentQueries;