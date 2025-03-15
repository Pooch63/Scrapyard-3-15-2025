<script lang="ts">
    const { question, options, correct }: {
        question: string,
        options: string[],
        correct: number
    } = $props();
</script>

<div class="question">
    <h2>{question}</h2>
    {#each options as option}
    <div class="option">
        {option}
    </div>
    {/each}
</div>

<style lang="scss">
    .question {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 14px;
    }
    .option {
        cursor: pointer;
        border: 3px solid white;
        padding: 5px 5px;
        width: 100%;
    }
    .option.correct {
        background-color: beige;
    }
</style>