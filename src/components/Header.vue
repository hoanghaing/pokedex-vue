<template>
  <div>
    <FloatLabel class='search-pokemon-input'>
      <InputText id="username" v-model="searchText" />
      <label for="username">Pokemon name...</label>
    </FloatLabel>
  </div>
</template>
<script lang='ts' setup>
import FloatLabel from 'primevue/floatlabel';
import InputText from 'primevue/inputtext';
import { ref } from "vue";
const searchText = ref("");
</script>
<style lang='scss' scoped>
.search-pokemon-input {
  :deep(input) {
    width: 50%;
  }
}
</style>