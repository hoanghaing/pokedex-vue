<template>
  <div class='right'>
    <div>
      <Button class='badge-pokemon' v-for="(item, index) in pokemons" :key="`button-${index}`" :label="item.name"
        rounded :severity="severity[index % 8]" @click="onClick(item)">
      </Button>
    </div>
    <Paginator
      :first="first"
      :rows="100"
      :totalRecords="totals"
      @page="onPageChange"
      template="PrevPageLink CurrentPageReport NextPageLink"
      currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" />
  </div>
</template>
<script lang='ts' setup>
import { onMounted, ref } from 'vue';
import { listApi, detailApi } from '@/api';
import { usePokemonStore } from '@/stores/pokemon'
import Button from 'primevue/button';
import Paginator from 'primevue/paginator';
const pokeStore = usePokemonStore();

const pokemons = ref([]);
const totals = ref(0);
const first = ref(0);
const currentPage = ref(0);
const severity = [
  '',
  'secondary',
  'success',
  'info',
  'warning',
  'help',
  'danger',
  "contrast"
];
const onClick = (item: any) => {
  pokeStore.setLoadingDetail(true);
  const { url } = item;
  detailApi.getPokemonDetail(url).then((res: any) => {
    if (res.id) pokeStore.setSelectedPokemon(res);
    else pokeStore.setSelectedPokemon({});
    setTimeout(() => {
      pokeStore.setLoadingDetail(false);
    })
  })
};
const onPageChange = (event) => {
  const { page } = event;
  if (page !== currentPage.value) {
    listApi.getPokemons((100 * (page - 1) + 1), 100).then((res: any) => {
      const { results, count } = res;
      pokemons.value = results;
      totals.value = count;
    });
  }
};
onMounted(() => {
  listApi.getPokemons(0, 100).then((res: any) => {
    const { results, count } = res;
    pokemons.value = results;
    totals.value = count;
  });
})
</script>
<style lang='scss' scoped>
.right {
  margin-right: 2rem;
  .badge-pokemon {
    margin: 0.25rem;
    padding: 4px 8px;
  }
}
</style>