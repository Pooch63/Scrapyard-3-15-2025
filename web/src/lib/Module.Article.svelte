<script lang="ts">
    import Header from "$lib/Module.Header.svelte";

    const { children, name }: { children: any, name: string } = $props();
</script>

<div class="article">
    <Header header="Article: {name}" />
    {@render children()}
</div>

<style>
    .article {
        color: black;
    }
</style>