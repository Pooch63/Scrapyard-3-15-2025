<script lang='ts'>
    import QuizQuestion from "./Question.svelte";
    import Header from "$lib/Module.Header.svelte";
    import type { Question } from "$scripts/fetch";

    const { name, questions }: {name: string, questions: Question[]} = $props();

    let question: number = $state(0);
    let skippable = $state(false);
    function next(): void {
        question = question + 1;
        skippable = false;
    }
    function submit(): void {
        skippable = true;
    }
</script>

<Header header="Quiz: &nbsp; {name}" />
{#key question}
    <QuizQuestion {...questions[question]} {submit} />
{/key}
<br/>
{#if skippable && question < questions.length - 1}
<button onclick={next}>Next</button>
{/if}

<style>
    button {
        width: 100%;
        text-align: center;
        font-size: 1em;
        padding: 5px 5px;
        border: 2px solid #fff;
    }
    button:disabled {
        cursor: not-allowed;
    }
    button:not(:disabled) {
        cursor: pointer;
    }
</style>