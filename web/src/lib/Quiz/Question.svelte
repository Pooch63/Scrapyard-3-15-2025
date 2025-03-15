<script lang="ts">
    const { question, answers, correct, submit, explanations }: {
        question: string,
        answers: string[],
        explanations?: (string | null)[] | null;
        correct: number,
        submit: (num: number) => void
    } = $props();

    let completed = $state(false);
    let hit = $state(NaN);

    function validate(num: number) {
        if (!isNaN(hit)) return;
        completed = true;
        hit = num;
        submit(num);
    }
    const grade = (num: number) => num == correct ? 'correct' : 'incorrect';
</script>

<div class="question">
    <h2 class="header">{question}</h2>
    {#each answers as answer, num}
    <button onclick={() => validate(num)} class="{!completed ? 'avail' : ''} option {completed && (correct == num || hit == num) ? grade(num) : ''}">
        {answer}
    </button>
    {#if completed && explanations && explanations[num]}
    <span class="explanation">{explanations[num]}</span>
    {/if}
    {/each}
</div>

<style lang="scss">
    .header {
        font-size: 1.5rem;
    }
    .question {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 14px;
    }
    .option {
        border: 3px solid white;
        padding: 5px 5px;
        width: 100%;
    }
    .option.avail {
        cursor: pointer;
    }
    .option.correct {
        background-color: rgb(13, 238, 88);
        color: black;
    }
    .option.incorrect {
        background-color: red;
    }
</style>