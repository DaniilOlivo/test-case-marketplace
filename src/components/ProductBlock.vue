<script setup lang="ts">
import basketIcon from "../assets/icons/basket.png"
import favoriteIcon from "../assets/icons/favorite.png"
import favoriteActiveIcon from "../assets/icons/favorite_select.png"

import { computed } from "vue"
import type { Product } from "../interfaces"
import { useCatalogStore } from "@/stores/catalog"

const store = useCatalogStore()

const props = defineProps<Product>()

const isFavorite = computed(() => Boolean(store.favorites.find(id => id == props.id)))

function clickFavorite() {
    const listFavor = store.favorites
    if (isFavorite.value) listFavor.splice(listFavor.indexOf(props.id), 1)
    else listFavor.push(props.id)
}
</script>

<template>
    <article class="product-block">
        <div class="product-block__discount" v-if="price.old_price">Скидка</div>

        <div class="product-block__image">{{ image.url }}</div>

        <h6 class="product-block__code">{{ code }}</h6>

        <h3 class="product-block__name">{{ name }}</h3>

        <div class="product-block-panel">
            <div class="price-block">
                <span class="price-block__old" v-if="price.old_price">{{ price.old_price }} ₽</span>
                <span class="price-block__current">{{ price.current_price }} ₽</span>
            </div>

            <div class="control-block">
                <img :src="basketIcon">
                <img :src="isFavorite ? favoriteActiveIcon : favoriteIcon" @click="clickFavorite">
            </div>
        </div>
    </article>
</template>

<style scoped>
.product-block {
    width: 336px;
    height: 352px;
    border: solid var(--color-border) 1px;
    position: relative;

    padding: 8px 12px;

    display: flex;
    flex-direction: column;
}

.product-block__discount {
    width: 80px;
    height: 24px;

    background-color: var(--color-accent);
    color: white;

    position: absolute;
    left: 0;
    top: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 14px;
    font-weight: 500;
}

.product-block__image {
    background-color: gainsboro;
    align-self: center;
    width: 238px;
    height: 238px;

    margin-bottom: 20px;
}

.product-block__code {
    font-size: 10px;
    font-weight: 400;
    color: var(--color-additional-text)
}

.product-block__name {
    font-size: 16px;
    font-weight: 500;
    margin: 6px 0 10px;
}

.product-block-panel {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
}

.price-block {
    display: flex;
    gap: 10px;
}

.price-block__old {
    text-decoration: line-through;
    color: var(--color-additional-text);
}

.price-block__current {
    font-weight: 500;
}

.control-block {
    display: flex;
    gap: 20px;
    margin-right: 12px;
}
</style>
