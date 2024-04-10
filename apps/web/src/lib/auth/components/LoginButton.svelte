<script lang="ts">
	import { Button, Input } from 'flowbite-svelte';
	import { GoogleSolid } from 'flowbite-svelte-icons';
	export let provider: 'google';

	const providerStyleMap = {
		google: {
			color: 'red',
			icon: GoogleSolid
		}
	};
</script>

<form method="POST" action="/login">
	<Input type="hidden" name="providerId" value={provider} />
	<Button type="submit" color="red" class="w-full min-w-min">
		<svelte:component this={providerStyleMap[provider].icon} class="me-2" />Sign in with {provider}
	</Button>
</form>

<style>
</style>
