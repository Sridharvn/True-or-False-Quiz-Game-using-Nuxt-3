<template>
    <div class="font-bold flex text-center justify-center items-center p-10 text-4xl text-blue-600">Welcome To the Game
    </div>
    <Card>{{ questions[0] }}
        <!-- <h1>{{ questions[0].category }}</h1> -->
    </Card>
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
            await axios.get(`${this.API_URL}?amount=${params.amount}&difficulty=${params.difficulty}&type=${params.type}`)
                .then(response => {
                    this.questions = response.data.results;
                    console.log(response)
                })
            // console.log(this.questions);

        }
    },
    data() {
        return {
            API_URL: 'https://opentdb.com/api.php',
            questions: [],
        }
    },
    mounted() {
        this.getQuestions(10, "easy");
    }
}
</script>