import { ref } from "vue"
import { defineStore } from "pinia"

import dataItems from "../data/items.json"
import dataMaterials from "../data/materials.json"

export const useCatalogStore = defineStore("catalog", () => {
    const items = ref(dataItems)
    const materials = ref(dataMaterials)

    return { items, materials }
})
