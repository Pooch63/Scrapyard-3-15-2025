<script lang="ts">
    const { name, number, children }: { name: string, number: number, children: any } = $props();
</script>

<title>Unit {number}: {name}</title>

<div class="unit">
    <h1>Unit {number}: {name}</h1>
    {@render children()}
</div>

<style>
    h1 {
        font-size: 2rem;
    }
</style>