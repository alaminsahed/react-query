import React, { useState } from 'react';
import { useAddSuperHeroData, useSuperHeroData } from '../hooks/useSuperHeroData';
import { Link } from 'react-router-dom';


const RQSuperHeroesPage = () => {
    const [name, setName] = useState('')
    const [alterEgo, setAlterEgo] = useState('')
    // we can transform data into something using select.
    const onSuccess = (data) => {
        console.log('onSuccess', data);
    }

    const onError = (error) => {
        console.log('onError', error);
    }
    const { isLoading, data, isError, error } = useSuperHeroData({ onError, onSuccess });
    const { mutate: addHero } = useAddSuperHeroData();
    // console.log("a", a);

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    // if (isInitialLoading) {
    //     return <h1>Loading...</h1>
    // }

    if (isError) {
        return <h1>Error: {error.message}</h1>
    }


    const handleAddHeroClick = () => {
        const hero = { name, alterEgo }
        addHero(hero)
    }

    return (
        <div>
            <h1>RQSuperHeroesPage</h1>
            <div>
                <input
                    type='text'
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input
                    type='text'
                    value={alterEgo}
                    onChange={e => setAlterEgo(e.target.value)}
                />
                <button onClick={handleAddHeroClick}>Add Hero</button>
            </div>
            {/* <button onClick={refetch}>Fetch Data</button> */}
            {
                data?.data.map(superhero => (
                    <div key={superhero.id}>
                        <Link to={`/rq-super-heroes/${superhero.id}`}>{superhero.name}</Link>
                    </div>
                ))
            }
            {/* {
                data.map(superhero => (
                    <div key={superhero}>{superhero}</div>
                ))
            } */}
        </div>
    );
};

export default RQSuperHeroesPage;