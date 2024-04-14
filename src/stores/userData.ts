import { ref } from "vue"
import { defineStore } from "pinia"

type UserArray = 'basket' | 'favorites'

export const useUserDataStore = defineStore("userData", () => {
    const favorites = ref([] as string[])
    const basket = ref([] as string[])

    function addId(array: UserArray, id: string) {
        const arr = (array == 'basket') ? basket : favorites
        if (arr.value.includes(id)) return
        arr.value.push(id)
    }

    function removeId(array: UserArray, id: string) {
        const arr = (array == 'basket') ? basket : favorites
        if (!arr.value.includes(id)) return
        arr.value.splice(arr.value.indexOf(id), 1)
    }

    return {favorites, basket, addId, removeId}
})
