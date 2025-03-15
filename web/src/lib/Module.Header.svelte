<script lang="ts">
    const { header }: { header: string } = $props();
</script>

<h1>{header}</h1>

<style>
    h1 {
        font-size: 2rem;
        width: 100%;
        text-align: left;
        color: black;
    }
</style>