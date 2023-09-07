import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const fetchSuperHeros = () => {
    return axios.get('http://localhost:4001/superheroes')
}

const fetchFriends = () => {
    return axios.get('http://localhost:4001/friends')
}


const ParallelQueriesPage = () => {
    const { data: heros } = useQuery(['super-heros'], fetchSuperHeros);
    const { data: friends } = useQuery(['friends'], fetchFriends);
    console.log(heros, friends);
    return (
        <div>
            <h1>JSX is as usual</h1>
        </div>
    );
};

export default ParallelQueriesPage;