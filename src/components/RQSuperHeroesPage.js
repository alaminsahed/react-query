import axios from 'axios';
import React from 'react';
import { useQuery } from '@tanstack/react-query';


const fetchData = () => {
    return axios.get('http://localhost:4001/superheroes')
}

const RQSuperHeroesPage = () => {
    // data is refetch only when any event is received
    const { isInitialLoading, isLoading, data, isError, error, isFetching, refetch } = useQuery({ queryKey: ['superheroes'], queryFn: fetchData, enabled: false });

    // if (isLoading) {
    //     return <h1>Loading...</h1>
    // }

    if (isInitialLoading) {
        return <h1>Loading...</h1>
    }

    if (isError) {
        return <h1>Error: {error.message}</h1>
    }

    console.log({ isLoading, isFetching });

    return (
        <div>
            <h1>RQSuperHeroesPage</h1>
            <button onClick={refetch}>Fetch Data</button>
            {
                data?.data.map(superhero => (
                    <div key={superhero.name}>{superhero.name}</div>
                ))
            }
        </div>
    );
};

export default RQSuperHeroesPage;