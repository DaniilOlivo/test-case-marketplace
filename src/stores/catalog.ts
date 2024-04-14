import { ref, computed } from "vue"
import { defineStore } from "pinia"

import dataItems from "../data/items.json"
import dataMaterials from "../data/materials.json"

export const useCatalogStore = defineStore("catalog", () => {
    const items = ref(dataItems)
    const materials = ref(dataMaterials)

    const favorites : string[] = []

    const itemsByMaterial = computed(() => (materialId : number)  => {
        return items.value.filter(item => item.material == materialId)
    })

    return { items, materials, favorites, itemsByMaterial }
})
