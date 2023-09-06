import axios from 'axios';
import React from 'react';
import { useQuery } from '@tanstack/react-query';


const fetchData = () => {
    return axios.get('http://localhost:4001/superheroes')
}

const RQSuperHeroesPage = () => {
    // we can transform data into something using select.
    const onSuccess = (data) => {
        console.log('onSuccess', data);
    }

    const onError = (error) => {
        console.log('onError', error);
    }
    const { isLoading, data, isError, error, isFetching } = useQuery({
        queryKey: ['superheroes'], queryFn: fetchData, onSuccess, onError, select: (data) => {
            const heroNames = data.data.map(data => data.name);
            return heroNames;
        }
    });

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    // if (isInitialLoading) {
    //     return <h1>Loading...</h1>
    // }

    if (isError) {
        return <h1>Error: {error.message}</h1>
    }

    console.log({ isLoading, isFetching });

    return (
        <div>
            <h1>RQSuperHeroesPage</h1>
            {/* <button onClick={refetch}>Fetch Data</button> */}
            {/* {
                data?.data.map(superhero => (
                    <div key={superhero.name}>{superhero.name}</div>
                ))
            } */}
            {
                data.map(superhero => (
                    <div key={superhero}>{superhero}</div>
                ))
            }
        </div>
    );
};

export default RQSuperHeroesPage;