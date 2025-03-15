<script lang="ts">
    import Header from "$lib/Module.Header.svelte";

    const { title, videoURL }: { title: string, videoURL: string } = $props();
</script>

<div class="video">
    <Header header="Video: {title}" />
    <video src={videoURL}>
        <track kind="captions" />
    </video>
</div>