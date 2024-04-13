<script setup lang="ts">
import { computed } from "vue"

import { useMenuStore } from "../stores/menu"

const store = useMenuStore()

interface ItemMenu {
    text: string,
    active: boolean
}

const listMenu = computed(() => {
    const len = store.breadCrumb.length

    const resultList : ItemMenu[] = []

    for (const item of store.breadCrumb) {
        resultList.push({
            text: item,
            active: item == store.breadCrumb[len - 1]
        })
    }

    return resultList
})

const classItem = "menu-bread-crumb__item"
</script>

<template>
    <h3 class="menu-bread-crumb">
        <template v-for="item in listMenu">
            <span :class="[classItem, {[classItem + '_active']: item.active}]">
                {{ item.text }}
            </span>

            <span v-if="!item.active">/</span>
        </template>
    </h3>
</template>

<style scoped>
.menu-bread-crumb {
    color: var(--color-additional-text);
}

.menu-bread-crumb__item {
    margin: 0 16px;
    cursor: pointer;
}

.menu-bread-crumb__item_active {
    color: black;
}
</style>
