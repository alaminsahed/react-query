import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useSuperHeroData = ({ onSuccess, onError }) => {
    const fetchData = () => {
        return axios.get('http://localhost:4001/superheroes')
    }
    return useQuery({
        queryKey: ['superheroes'], queryFn: fetchData, onSuccess, onError,
        //  select: (data) => {
        //     const heroNames = data.data.map(data => data.name);
        //     return heroNames;
        // }
    });
};

