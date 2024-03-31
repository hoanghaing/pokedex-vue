import axios from 'axios';
const API_LIST_URL = 'https://pokeapi.co/api/v2/pokemon';
export const getPokemons = async (offset, limit) => {
  try {
    const response = await axios.get(API_LIST_URL, {
      params: {
        offset: offset,
        limit: limit
      }
    });
    return response.data;
  }
  catch (error) {
    console.error('Error fetching pokemons:', error);
    throw error;
  }
};
