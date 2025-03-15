<script lang="ts">
	import Navbar from '$lib/Website.Navbar.svelte';
	import '../app.css';
	let { children } = $props();
</script>


<Navbar />

{@render children()}
