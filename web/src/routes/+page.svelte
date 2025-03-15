<script>
	import Module from "$lib/Module.Module.svelte";
    import Content from "$lib/Module.Content.svelte";
    import Text from "$lib/Module.Text.svelte";
    import Unit from "$lib/Module.Unit.svelte";

</script>
<Module>
    <Content>
        <Unit name="Birds" number={1}>
            <Text name="Introduction">
                <p>Page content</p>
            </Text>
        </Unit>
    </Content>
</Module>