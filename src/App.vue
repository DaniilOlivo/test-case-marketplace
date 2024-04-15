<script setup lang="ts">
  import MenuBreadCrumb from "./components/MenuBreadCrumb.vue"
  import CatalogProducts from "./components/CatalogProducts.vue"
</script>

<template>
  <main>
    <MenuBreadCrumb></MenuBreadCrumb>

    <h1 class="title-page">Комплекты стеллажных систем</h1>

    <CatalogProducts></CatalogProducts>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.title-page {
  font-weight: 600;
  font-size: 36px;
}

@media (max-width: 740px) {
  main {
    align-items: center;
  }
}
</style>
