import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
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

const addSuperHero = hero => {
    return axios.post('http://localhost:4001/superheroes', hero)
}

export const useAddSuperHeroData = () => {
    const queryClient = useQueryClient();
    return useMutation(addSuperHero, {
        // onSuccess: (data) => {
        //     //queryClient.invalidateQueries('superheroes')
        //     // set queries update the cache value and show the updated data
        //     queryClient.setQueryData(['superheroes'], (oldQueryData) => {
        //         console.log("++", oldQueryData, data);
        //         return {
        //             ...oldQueryData.data, data: [...oldQueryData.data, data.data]
        //         }
        //     })
        // }
        onMutate: async newHero => {
            await queryClient.cancelQueries('superheroes')
            const previousHeroData = queryClient.getQueryData(['superheroes'])
            console.log(newHero);
            queryClient.setQueryData(['superheroes'], oldQueryData => {
                return {
                    ...oldQueryData,
                    data: [
                        ...oldQueryData.data,
                        { id: oldQueryData?.data?.length + 1, ...newHero }
                    ]
                }
            })
            return { previousHeroData }
        },
        onError: (_err, _newTodo, context) => {
            // if get error then rollback the data
            queryClient.setQueryData(['superheroes'], context.previousHeroData)
        },
        onSettled: () => {
            queryClient.invalidateQueries('superheroes')
        }
        /**Optimistic Update End */
    })
}