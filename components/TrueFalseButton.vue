<template>
    <div>
        <button v-if="type == 'true'" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            <slot></slot>
        </button>
        <button v-if="type == 'false'" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            <slot></slot>
        </button>
    </div>
</template>
<script setup>
defineProps(['type'])
</script>