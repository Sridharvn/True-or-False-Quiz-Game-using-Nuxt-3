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
                            {{ currentQuestion }}
                            <!-- {{ questions[current].question }} -->
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
        removeQuot() {
            this.currentQuestion = this.decode(this.questions[this.current].question);
        },

        isCorrect() {
            this.$emit("correct")
            this.current += 1;
            if (this.questions[this.current].question) { this.removeQuot(); }


        },
        isInCorrect() {
            this.$emit("incorrect")
            this.current += 1;
            if (this.questions[this.current].question) { this.removeQuot(); }
        },
        decode(str) {

            let txt = new DOMParser().parseFromString(str, "text/html");

            return txt.documentElement.textContent;

        }
    },
    props: {
        questions: String,
        score: String,
    },
    data() {
        return {
            current: 0,
            currentQuestion: ""
        }
    },
    mounted() {
        this.removeQuot()
    }
}
</script>