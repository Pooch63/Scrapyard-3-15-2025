<script lang="ts">
    import TextComponent from "$lib/Module.Text.svelte";
    import QuizComponent from "$lib/Quiz/Quiz.svelte";
    import VideoComponent from "$lib/Module.Video.svelte";

    import { type PartUnion, type Text, type Quiz, type Video, PartType } from "$scripts/fetch";
    const { part }: { part: PartUnion } = $props(); 
</script>

{#if part.type == PartType.Text}
<TextComponent name={part.title}>
    {part.part as Text}
</TextComponent>
{:else if part.type == PartType.Quiz}
<QuizComponent name={part.title} questions={(part.part as Quiz).questions} />
{:else if part.type == PartType.Video}
<VideoComponent title={part.title} videoURL={part.part as Video} />
{/if}

