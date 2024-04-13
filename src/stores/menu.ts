import { ref } from "vue"
import { defineStore } from "pinia"

export const useMenuStore = defineStore("menu", () => {
    const breadCrumb = ref([
        "Главная",
        "Системы хранения",
        "Комплекты стеллажных систем"
    ])

    return { breadCrumb }
})
