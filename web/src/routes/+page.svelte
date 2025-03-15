<script>
	import Module from "$lib/Module.Module.svelte";
    import Content from "$lib/Module.Content.svelte";
    import Text from "$lib/Module.Text.svelte";
    import Unit from "$lib/Module.Unit.svelte";
    import Question from "$lib/Quiz/Question.svelte";

</script>
<Module>
    <Question
    question="What is the capital of France?"
    options={["Paris", "London", "Berlin", "Madrid"]}
    correct={0}>
    </Question>
    <Content>
        <Unit name="Birds" number={1}>
            <Text name="Introduction">
                <p>Page content</p>
            </Text>
            <Question ></Question>
        </Unit>
    </Content>
</Module>