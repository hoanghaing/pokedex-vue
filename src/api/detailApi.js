import axios from 'axios';
export const getPokemonDetail = async (url) => {
  try {
    const response = await axios.get(url, {
    });
    return response.data;
  }
  catch (error) {
    console.error('Error fetching pokemons:', error);
    throw error;
  }
};
