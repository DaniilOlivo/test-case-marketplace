<script setup lang="ts">
import { computed } from 'vue';
import InputVariants from './InputVariants.vue';
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
    </div>
</template>

<style scoped>
.filtets-block {
    display: flex;
    gap: 24px;
}
</style>
