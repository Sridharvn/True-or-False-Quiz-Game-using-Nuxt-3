<template>
    <div>
        <div v-if="questions.length == 0">
            <Card>Loading... </Card>
        </div>

        <div v-else>
            <Card :correctAnswer="questions[0].correct_answer" @correct="isCorrect()" @incorrect="isInCorrect()">
                <!-- {{ questions[0] }} -->
                <div>
                    <h1>
                        {{ questions[0].category }}
                    </h1>
                    <br />
                    <p>
                        {{ questions[0].question }}
                        <br />
                        True or False?
                    </p>
                </div>
            </Card>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        isCorrect() {
            console.log("Correct");
        },
        isInCorrect() {
            console.log("InCorrect");
        }
    },
    props: {
        questions: String
    },
    data() {
        return {
        }
    },

}
</script>