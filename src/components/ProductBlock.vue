<script setup lang="ts">
import basketIcon from "../assets/icons/basket.png"
import basketActiveIcon from "../assets/icons/basket_accept.png"
import favoriteIcon from "../assets/icons/favorite.png"
import favoriteActiveIcon from "../assets/icons/favorite_select.png"

import { computed } from "vue"
import type { Product } from "../interfaces"
import { useUserDataStore } from "../stores/userData"

const store = useUserDataStore()

const props = defineProps<Product>()

const isFavorite = computed(() => store.favorites.includes(props.id))
const inBasket = computed(() => store.basket.includes(props.id))

function clickFavorite() {
    if (isFavorite.value) store.removeId('favorites', props.id)
    else store.addId('favorites', props.id)
}

function clickBasket() {
    if (inBasket.value) store.removeId('basket', props.id)
    else store.addId('basket', props.id)
}

const imgUrl = new URL("../data" + props.image.url, import.meta.url)
</script>

<template>
    <article class="product-block">
        <div class="product-block__discount" v-if="price.old_price">Скидка</div>

        <img class="product-block__image" :src="imgUrl.href">

        <h6 class="product-block__code">{{ code }}</h6>

        <h3 class="product-block__name">{{ name }}</h3>

        <div class="product-block-panel">
            <div class="price-block">
                <span class="price-block__old" v-if="price.old_price">{{ price.old_price }} ₽</span>
                <span class="price-block__current">{{ price.current_price }} ₽</span>
            </div>

            <div class="control-block">
                <img class="control-block__icon" :src="inBasket ? basketActiveIcon : basketIcon" @click="clickBasket">
                <img class="control-block__icon" :src="isFavorite ? favoriteActiveIcon : favoriteIcon" @click="clickFavorite">
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

.control-block__icon {
    width: 20px;
    height: 20px;
}
</style>
