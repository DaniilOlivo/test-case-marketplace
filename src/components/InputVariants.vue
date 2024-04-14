<script setup lang="ts">


interface Option {
    label: string,
    key: string
}

interface Props {
    label: string,
    options: Option[]
}

defineProps<Props>()

const model = defineModel()
</script>

<template>
    <div class="input-variants">
        <label class="input-variants__label">{{ label }}</label>

        <select class="input-variants__select" v-model="model">
            <option v-for="item in options" :value="item.key" :key="item.key">{{ item.label }}</option>
        </select>
    </div>
</template>

<style scoped>
.input-variants {
    display: flex;
    flex-direction: column;
    gap: 5px;

    width: 288px;
}

.input-variants__label {
    margin-left: 16px;
    color: var(--color-additional-text);
    font-size: 12px;
}

.input-variants__select {
    height: 40px;
    background-color: var(--color-input);
    padding: 0 16px;
    border: none;

    cursor: pointer;
    transition: 200ms;
}

.input-variants__select:hover {
    background-color: var(--color-input-hover);
}
</style>
