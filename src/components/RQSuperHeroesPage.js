import axios from 'axios';
import React from 'react';
import { useQuery } from '@tanstack/react-query';


const fetchData = () => {
    return axios.get('http://localhost:4001/superheroes')
}

const RQSuperHeroesPage = () => {
    // data is automatically updated in every 2s of seconds
    const { isLoading, data, isError, error, isFetching } = useQuery({ queryKey: ['superheroes'], queryFn: fetchData, refetchInterval: 2000, refetchIntervalInBackground: true });

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (isError) {
        return <h1>Error: {error.message}</h1>
    }

    console.log({ isLoading, isFetching });

    return (
        <div>
            <h1>RQSuperHeroesPage</h1>
            {
                data && data.data.map(superhero => (
                    <div key={superhero.name}>{superhero.name}</div>
                ))
            }
        </div>
    );
};

export default RQSuperHeroesPage;