<script lang='ts'>
    const { children, name }: { children: any, name: string } = $props();

    let opened = $state(false);
</script>

<div class="module-text">
    <div class="name">
        {name}
        <button onclick={() => opened = !opened}>
            <span class="material-symbols-outlined arrow {opened ? 'open' : 'closed'}">
            chevron_right
            </span>
        </button>
    </div>
    <div class="content {opened ? 'content-open' : 'content-closed'}">
    {@render children()}
    </div>
</div>

<style lang="scss">
    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
    .name {
        display: flex;
        flex-direction: row;
        align-content: center;
    }
    .module-text {
        background-color: rgb(146, 155, 230);
        display: flex;
        flex-direction: column;
        padding: 4px 4px;
    }

    .content {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease-out;
    }

    .content-open {
        max-height: 500px; /* Adjust this value as needed */
        transition: max-height 0.3s ease-in;
    }

    .content-closed {
        max-height: 0;
        transition: max-height 0.3s ease-out;
    }

    .arrow {
        transition: transform 0.3s;
    }
    .open {
        transform: rotate(90deg);
    }
    .closed {
        transform: rotate(0deg);
    }
    
</style>