<template>
    <div class="font-bold flex text-center justify-center items-center p-10 text-4xl text-blue-600">Welcome To the Game
    </div>
    <Card>Hello</Card>
</template>

<script>
import axios from 'axios'
export default {
    methods: {
        async getQuestions(amount, difficulty) {
            const params = {
                amount: amount,
                type: 'boolean',
                difficulty: difficulty
            }
            return await axios.get(`${this.API_URL}?amount=${params.amount}&difficulty=${params.difficulty}&type=${params.type}`)
                .then(response => response.data.results)
        }
    },
    data() {
        return {
            API_URL: 'https://opentdb.com/api.php'
        }
    },
    mounted() {
        this.getQuestions(10, "easy");
    }
}
</script>