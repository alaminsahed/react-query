import React from 'react';
import { useParams } from 'react-router-dom';
import { useSuperHeroDetails } from '../hooks/useSuperHeroDetails';

const RQSuperHeroPage = () => {
    const { heroId } = useParams();
    const { isLoading, data, isError, error } = useSuperHeroDetails(heroId);

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>{error.message}</h2>
    }

    return (
        <div>
            {
                <span>{data.data.name} - {data.data.alterEgo}</span>
            }
        </div>
    );
};

export default RQSuperHeroPage;