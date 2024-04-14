<script lang="ts">
	import { page } from '$app/stores';
	import LogoutButton from '$lib/auth/components/LogoutButton.svelte';
</script>

<a href="/" class="btn btn-primary">App</a>
{#if $page.data.session}
	<LogoutButton />
{:else}
	<span>No user logged in</span>
{/if}
