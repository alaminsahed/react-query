import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchSuperHero = (heroId) => {
    return axios.get(`http://localhost:4001/superheroes/${heroId}`);
}
// we can also use `querykey` it represents the ['super-hero', heroId]
// const fetchSuperHero = ({queryKey}) => {
//const heroId = queryKey[1]
//     return axios.get(`http://localhost:4001/superheroes/${heroId}`);
// }

export const useSuperHeroDetails = (heroId) => {
    return useQuery(['super-hero', heroId], () => fetchSuperHero(heroId))
};
