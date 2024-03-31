<template>
  <div class="home">
    <div class="header">
      <Header />
    </div>
    <div class="content">
      <Left />
      <Right />
    </div>
  </div>
</template>
<script lang='ts' setup>
import Header from '@/components/Header.vue';
import Left from '@/components/Left.vue';
import Right from '@/components/Right.vue';
</script>
<style lang='scss' scoped>
.home {
  display: flex;
  flex-direction: column;
  height: 100%;
  .header {
    
  }

  .content {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
}
</style>