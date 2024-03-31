import { defineStore } from 'pinia'

export const usePokemonStore = defineStore('pokemon', {
  state: () => {
    return {
      selectedPokemon: {},
      isLoadingDetail: false,
    }
  },
  actions: {
    setSelectedPokemon(pokemon: any) {
      this.selectedPokemon = pokemon
    },
    setLoadingDetail(val: boolean) {
      this.isLoadingDetail = val
    }
  },
  getters: {
    currentPokemon: (state) => state.selectedPokemon,
    imageUrl: (state: any) => {
      if (!state.selectedPokemon) return "";
      if (state?.selectedPokemon?.sprites?.other['official-artwork']?.front_default) {
        return state.selectedPokemon.sprites.other['official-artwork'].front_default;
      }
      return "";
    },
    detail: (state: any) => {
      if (!state.selectedPokemon) return {};
      const { selectedPokemon } = state
      return {
        name: selectedPokemon.name,
        height: selectedPokemon.height,
        weight: selectedPokemon.weight,
        stats: selectedPokemon.stats,
      }
    },
    loadingDetail: (state) => state.isLoadingDetail
  },
})