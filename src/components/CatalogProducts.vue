<script setup lang="ts">
import { computed } from 'vue';
import type { Product } from "../interfaces"
import InputVariants from './InputVariants.vue';
import ProductBlock from './ProductBlock.vue';
import { useCatalogStore } from '@/stores/catalog';

const store = useCatalogStore()

const listSort = [
    {label: "Цена по возрастанию", key: "+"},
    {label: "Цена по убыванию", key: "-"}
]

const listMaterials = computed(() => {
    const startList = [
        {label: "Все", key: "all"}
    ]
    const resultList = startList.concat(store.materials.map(material => {
        return {
            label: material.name,
            key: material.id
        }
    }))
    return resultList
})
</script>

<template>
    <div class="catalog">
        <div class="filtets-block">
            <InputVariants
                label="Сортировать по:" 
                :options="listSort"></InputVariants>
            <InputVariants
                label="Материал:"
                :options="listMaterials"></InputVariants>
        </div>

        <div class="products-view">
            <ProductBlock
                v-for="product in store.items"
                :key="product.id"
                v-bind="product as Product"></ProductBlock>
        </div>
    </div>
</template>

<style scoped>
.catalog {
    display: flex;
    flex-direction: column;
    gap: 32px;
}

.filtets-block {
    display: flex;
    gap: 24px;
}

.products-view {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
}
</style>
