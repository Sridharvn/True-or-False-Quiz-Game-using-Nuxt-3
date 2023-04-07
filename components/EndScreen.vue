<template>
    <div class="text-5xl text-orange-700 text-center flex-col">
        Your score is {{ score }}
        <div class="flex justify-center mt-10">
            <button type="button"
                class="text-white text-xl ml-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                v-on:click="Reset()">Restart</button>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        score: String,
    },
    methods: {
        Reset() {
            window.location.reload();
        }
    },
}

</script>