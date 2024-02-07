<script>
	import { SignIn, SignOut } from '@auth/sveltekit/components';
	import { page } from '$app/stores';
</script>

<h1>SvelteKit Auth Example</h1>
<p>
	$page.data.result: {$page.data.result}
	{#if $page.data.session}
		{#if $page.data.session.user?.image}
			<span style="background-image: url('{$page.data.session.user.image}')" class="avatar" />
		{/if}
		<span class="signedInText">
			<small>Signed in as</small><br />
			<strong>{$page.data.session.user?.name ?? 'User'}</strong>
			<strong>{$page.data.session.user?.email ?? 'fake@gmail.com'}</strong>
		</span>
		<SignOut />
	{:else}
		<span class="notSignedInText">You are not signed in</span>
		<SignIn provider="google" />
	{/if}
</p>
