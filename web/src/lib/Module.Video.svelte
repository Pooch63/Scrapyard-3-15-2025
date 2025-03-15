<script lang="ts">
    import Header from "$lib/Module.Header.svelte";

    const { title, videoURL }: { title: string, videoURL: string } = $props();
</script>

<div class="video">
    <Header header="Video: &nbsp; {title}" />
    <iframe title="video" width="420" height="315" src={videoURL}> </iframe>
</div>