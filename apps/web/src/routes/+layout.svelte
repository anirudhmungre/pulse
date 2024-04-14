<script>
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';

	import '../app.pcss';

	import AppNav from '$lib/core/components/AppNav.svelte';
	import { page } from '$app/stores';

	onMount(() => themeChange());
</script>

{#if $page.data.session}
	<AppNav />
{/if}
<div class="flex w-full justify-center">
	<slot />
</div>
