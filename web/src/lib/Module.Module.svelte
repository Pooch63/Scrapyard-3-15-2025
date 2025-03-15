<script lang="ts">
    const { children } = $props();
</script>

<div class="module">
    {@render children()}
</div>

<style lang="scss">
    .module {
        background-color: #4f5bcc;
        display: flex;
        flex-direction: column;
        padding: 4px 4px;
        color: white;
    }
</style>