<template>
    <div>
        <div class="text-5xl text-orange-700 text-center flex-col">
            Your score is {{ score }}


        </div>
        <div class="flex justify-center items-center mt-9">
            <table>
                <tr>
                    <th>Question</th>
                    <th>Correct Answer</th>
                    <th>Your Answer</th>
                </tr>
                <tr v-for="question in questions" :key="question.question">
                    <td>{{ decode(question.question) }}</td>
                    <td>{{ question.correct_answer }}</td>
                    <td :class="question.correct_answer == yourAnswers[index] ? 'text-green-700' : 'text-red-700'">
                        <!-- <td class="text-red-900"> -->
                        {{
                            yourAnswers[index] }}
                    </td>
                </tr>
            </table>
        </div>
        <div class="flex justify-center mt-10">
            <button type="button"
                class="text-white text-xl ml-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                v-on:click="Reset()">Restart</button>
        </div>

    </div>
</template>
<style scoped>
td {
    padding: 10px;
    border: 1px solid black;
}

th {
    padding: 10px;
    border: 1px solid #000;
    text-align: start;
}
</style>
<script>
export default {
    data() {
        return {
            index: 0,
        }
    },
    props: {
        score: String,
        questions: String,
        yourAnswers: String,
    },
    methods: {
        Reset() {
            window.location.reload();
        },
        decode(str) {

            let txt = new DOMParser().parseFromString(str, "text/html");

            return txt.documentElement.textContent;

        }
    },
}

</script>