<script lang="ts">
	import Course from "$lib/Course.svelte";

    const { data }: { data: { courses: { name: string, id: string }[] } } = $props();
</script>

<div class="courses">
    <div class="course">
        {#each data.courses as course}
            <Course {...course} />
        {/each}
    </div>
</div>

<style>
    .courses {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
    }
    .course {
        width: max(50%, 300px);
    }
</style>