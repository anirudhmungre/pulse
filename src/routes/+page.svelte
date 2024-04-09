<script lang="ts">
	import LogoutButton from '$lib/auth/components/LogoutButton.svelte';
	import { page } from '$app/stores';
	import { Button } from 'flowbite-svelte';
</script>

<Button href="/app">App</Button>
{#if $page.data.session}
	<LogoutButton />
{:else}{/if}
