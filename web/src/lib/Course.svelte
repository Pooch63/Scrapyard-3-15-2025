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
        padding: 8px 5px;
    }
</style>