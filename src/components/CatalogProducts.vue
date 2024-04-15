<script setup lang="ts">
import { computed, ref } from 'vue';
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

const currentSort = ref("+")
const currentMaterial = ref("all")

const products = computed(() => {
    let filterItems = store.items
    if (currentMaterial.value != "all") {
        filterItems = store.itemsByMaterial(parseInt(currentMaterial.value))
    }

    return filterItems.sort((a, b) => {
        if (currentSort.value == "+") {
            return a.price.current_price - b.price.current_price
        } else {
            return b.price.current_price - a.price.current_price
        }
    })
})
</script>

<template>
    <div class="catalog">
        <div class="filtets-block">
            <InputVariants
                label="Сортировать по:" 
                :options="listSort"
                v-model="currentSort"></InputVariants>
            <InputVariants
                label="Материал:"
                :options="listMaterials"
                v-model="currentMaterial"></InputVariants>
        </div>

        <div class="products-view">
            <ProductBlock
                v-for="product in products"
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
    justify-content: center;
    gap: 40px;
}
</style>
