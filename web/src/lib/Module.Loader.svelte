<script lang="ts">
    import Module from "$lib/Module.Module.svelte";
    import Lesson from "$lib/Module.Lesson.svelte";
    import Unit from "$lib/Module.Unit.svelte";
    import Decoder from "$lib/Module.Variable.Decoder.svelte";

    import type { Course } from "$scripts/fetch.ts";

    const { data }: { data: Course } = $props();
</script>

<div class="dashboard">
    <div class="overview">
        {#each data.units as unit, num}
        <div class="unit">
            <button class="unit-name link">Unit: {num + 1}: {unit.title}</button>
            {#each unit.parts as part}
                <button class="unit-part link">{part.title}</button>
                <br/>
            {/each}
        </div>
        {/each}
    </div>
    <Module>
        <Lesson>
            {#each data.units as unit, num}
            <Unit name={unit.title} number={num + 1}>
                {#each unit.parts as part}
                <Decoder {part} />
                {/each}
            </Unit>
            {/each}
        </Lesson>
    </Module>
</div>

<style lang="scss">
    .overview {
        --padding: 5%;
        .unit-name {
            margin-left: var(--padding);
        }
        .unit-part {
            margin-left: calc(var(--padding) * 2);
        }
        .link {
            cursor: pointer;
        }
        & {
            padding: 5px 7px;
            background-color: rgb(136, 136, 211);
        }
    }
    .dashboard {
        display: grid;
        grid-template-columns: 1fr 6fr;
        width: 100%;
    }
</style>