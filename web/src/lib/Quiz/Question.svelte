<script lang="ts">
    import Header from "$lib/Module.Header.svelte";

    const { question, options, explanations, correct }: {
        question: string,
        options: string[],
        explanations?: (string | null)[] | null,
        correct: number
    } = $props();

    let completed = $state(false);
    let hit = $state(NaN);

    console.assert(explanations == null || explanations.length <= options.length)

    function validate(num: number) {
        if (!isNaN(hit)) return;
        completed = true;
        hit = num;
    }
    const grade = (num: number) => num == correct ? 'correct' : 'incorrect';
</script>

<div class="question">
    <Header header="Quiz: &nbsp; {question}" />
    {#each options as option, num}
    <button onclick={() => validate(num)} class="{!completed ? 'avail' : ''} option {completed && (correct == num || hit == num) ? grade(num) : ''}">
        {option}
    </button>
    {#if completed && explanations != null && explanations[num] != null}
    <span class="explanation">{explanations[num]}</span>
    {/if}
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