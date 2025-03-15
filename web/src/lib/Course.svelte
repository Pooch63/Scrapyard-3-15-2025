<script lang="ts">
    const { name, id }: { name: string, id: string } = $props();
</script>

<div class="course">
    <a href="/{id}" class="name">{name}</a>
</div>

<style>
    .course {
        color: black;
        width: 100%;
        border: 3px solid #000;
        padding: 0;
        text-align: center;
    }
    .name {
        width: 100%;
        height: 100%;
        padding: 8px 5px;
        text-decoration: underline;
    }
</style>