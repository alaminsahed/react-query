import axios from 'axios';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useSuperHeroData } from '../hooks/useSuperHeroData';




const RQSuperHeroesPage = () => {
    // we can transform data into something using select.
    const onSuccess = (data) => {
        console.log('onSuccess', data);
    }

    const onError = (error) => {
        console.log('onError', error);
    }
    const { isLoading, data, isError, error, isFetching } = useSuperHeroData({ onError, onSuccess });

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