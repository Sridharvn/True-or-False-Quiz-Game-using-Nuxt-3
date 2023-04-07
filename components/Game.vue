<template>
    <div>
        <!-- {{ questions.length }} -->
        <div v-if="current <= questions.length">
            <div v-if="questions.length == 0">
                <Card>Loading... </Card>
            </div>
            <div v-else>
                <Card :correctAnswer="questions[current].correct_answer" @correct="isCorrect()" @incorrect="isInCorrect()">
                    <!-- {{ questions[0] }} -->
                    <div>
                        <h1>
                            {{ questions[current].category }}
                        </h1>
                        <br />
                        <p>
                            {{ questions[current].question }}
                            <br />
                            True or False?
                        </p>
                    </div>
                </Card>
            </div>
        </div>
        <div v-else>
            <EndScreen :score="score"></EndScreen>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        isCorrect() {
            // console.log("Correct");
            this.$emit("correct")
            this.current += 1;
        },
        isInCorrect() {
            // console.log("InCorrect");
            this.$emit("incorrect")
            this.current += 1;
        }
    },
    props: {
        questions: String,
        score: String,
    },
    data() {
        return {
            current: 0,
        }
    },

}
</script>