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
    .arrow {
        transition: transform 0.3s;
    }
    .closed {
        transform: rotate(90deg);
    }
    .content {
        transition: transform 0.3;
    }
    .content-closed {
        transform: scaleX(0) scaleY(0);
    }
</style>