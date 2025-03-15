<script lang="ts">
    import Navbar from '$lib/Website.Navbar.svelte';
    import ModuleLoader from '$lib/Module.Loader.svelte';
    
    import type { PageProps } from './$types';
	import { type Course } from '$scripts/fetch';
	let { data }: PageProps & { data: { course: Course } } = $props();
</script>

<Navbar />

{#if data == null}
<h1>Uh oh!</h1>
<h3>Failed to load quiz data :&x#28;</h3>
{:else if data.course != null}
<ModuleLoader data={data.course} />
{:else}
<h1>Your connection is corrupted. It's been terminated for safety reasons.</h1>
{/if}