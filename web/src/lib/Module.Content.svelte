<script lang="ts">
    const { children } = $props();
</script>

<div class="content">
    {@render children()}
</div>

<style>
    .content {
        background-color: #b9bbd4;
        display: flex;
        flex-direction: column;
        padding: 4px 4px;
        color: white;
    }
</style>