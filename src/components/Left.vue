<template>
  <div class='left'>
    <div v-if="showLoadingDetail" class='skeleton'>
      <div class='skeleton-image'>
        <Skeleton size="25rem" />
      </div>
      <div class='skeleton-info'>
        <Skeleton width="15rem"></Skeleton>
        <Skeleton width="15rem"></Skeleton>
        <Skeleton width="15rem"></Skeleton>
        <Skeleton width="15rem"></Skeleton>
        <Skeleton width="15rem"></Skeleton>
      </div>
    </div>
    <div v-else class='image-container'>
      <div class='image'>
        <img :src="pokeStore.imageUrl" :alt="pokeStore.name">
      </div>
      <div class='detail' v-if="pokeStore.detail.name">
        <ul class='info'>
          <li>Name: {{ capitalizeText(pokeStore.detail.name) }}</li>
          <li>Height: {{ pokeStore.detail.height }}</li>
          <li>Weight: {{ pokeStore.detail.weight }}</li>
          <li>Stats:
            <ul>
              <li v-for="(item) in pokeStore.detail.stats">
                {{ `${capitalizeText(item.stat.name)}: ${item.base_stat}` }}
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang='ts' setup>
import { computed } from "vue";
import { usePokemonStore } from '@/stores/pokemon';
import capitalizeText from '@/utils/textHandler';
import Skeleton from 'primevue/skeleton';

const pokeStore = usePokemonStore();
const showLoadingDetail = computed(() => {
  return pokeStore.loadingDetail
})
</script>
<style lang='scss' scoped>
.left {
  display: flex;
  min-width: 50rem;

  .skeleton {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    gap: 1rem;
    flex-direction: row;
    .skeleton-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }

  .image-container {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    img {
      max-width: 25rem;
    }

    .info {
      list-style-type: none;
    }
  }

}
</style>