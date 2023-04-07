<template>
    <div class="font-bold flex text-center justify-center items-center p-10 text-4xl text-blue-600">
        <!-- {{ score }} -->
        Welcome To the Game
    </div>
    <div v-if="isStarted">
        <Game :questions="questions" @correct="isCorrect()" @incorrect="isInCorrect()" :score="score"></Game>
    </div>
    <div v-else>
        <div class="lg:text-xl text-center lg:mx-64 md:mx-32 sm:mx-10 mx-4">This is a true or false game. You wil be given a
            statement
            that might
            be
            true
            or
            false. You have to select the right choice and move to the next questions. You will be shown your final score
            after the game, from where you can reset the game.</div>
        <div class="flex justify-center items-center mt-10">
            <table>
                <tr>
                    <td>
                        <label for="countries"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Number of
                            Questions : &nbsp;</label>
                    </td>
                    <td class="flex justify-end">
                        <select id="countries"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            v-model="amount">
                            <option selected value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="40">40</option>
                            <option value="50">50</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="countries"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Difficulty :
                            &nbsp;</label>
                    </td>
                    <td class="flex justify-end">
                        <select id="countries"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            v-model="difficulty">
                            <option selected value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </td>
                </tr>
            </table>
        </div>
        <div class="flex justify-center mt-10">
            <button type="button"
                class="text-white text-xl ml-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                v-on:click="getQuestions()">Begin</button>
        </div>
    </div>
</template>
<style  scoped>
* {
    /* border: 1px solid black; */
}

td {
    padding: 5px;
}
</style>
<script>
import axios from "axios";

export default {
    methods: {
        async getQuestions() {
            const params = {
                amount: this.amount,
                type: "boolean",
                difficulty: this.difficulty,
            };
            await axios
                .get(
                    `${this.API_URL}?amount=${params.amount}&difficulty=${params.difficulty}&type=${params.type}`
                )
                .then((response) => {
                    this.questions = response.data.results;
                    console.log(response);
                    this.isStarted = true;
                });
            console.log(this.questions);

        },
        isCorrect() {
            this.score += 1;
            // console.log("Parent Correct");
        },
        isInCorrect() {
            // console.log("Parent InCorrect");
        },
    },
    data() {
        return {
            API_URL: "https://opentdb.com/api.php",
            questions: [],
            isStarted: false,
            amount: 10,
            difficulty: "easy",
            score: 0
        };
    },
    mounted() {
        // this.getQuestions(10, "easy");
    },
};
</script>
