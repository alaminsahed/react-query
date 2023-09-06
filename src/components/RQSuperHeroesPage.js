import axios from 'axios';
import React from 'react';
import { useQuery } from '@tanstack/react-query';


const fetchData = () => {
    return axios.get('http://localhost:4001/superheroes')
}

const RQSuperHeroesPage = () => {
    const { isLoading, data } = useQuery({ queryKey: ['superheroes'], queryFn: fetchData });

    if (isLoading) {
        return <h1>Loading...</h1>
    }

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