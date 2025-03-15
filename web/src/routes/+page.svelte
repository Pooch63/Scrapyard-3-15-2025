<script>
	import Module from "$lib/Module.Module.svelte";
    import Content from "$lib/Module.Content.svelte";
    import Text from "$lib/Module.Text.svelte";
    import Unit from "$lib/Module.Unit.svelte";
    import Question from "$lib/Quiz/Question.svelte";
    import Video from "$lib/Module.Video.svelte";

    import Navbar from '$lib/Website.Navbar.svelte';
</script>

<Navbar />

<Module>
    <Content>
        <Unit name="Birds" number={1}>
            <Text name="Introduction">
                <p>Page content</p>
            </Text>
            <Question
            question="What is the capital of France?"
            options={["Paris", "London", "Berlin", "Madrid"]}
            explanations={["this is super wrong"]}
            correct={0}>
            </Question>
            <Video title="About Parakeets" videoURL="https://www.youtube.com/embed/Yo3m1wXxbsE" />
        </Unit>
    </Content>
</Module>