<script lang="ts">
	import { page } from '$app/stores';
	import LogoutButton from '$lib/auth/components/LogoutButton.svelte';
	import Logo from './Logo.svelte';
	import Fa from 'svelte-fa';
	import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

	$: user = $page.data.session?.user;

	const initials = $page.data.session?.user?.name
		?.split(' ')
		.map((n) => n[0])
		.join('');
</script>

<header class="navbar">
	<div class="navbar-start">
		<a class="btn btn-ghost text-3xl font-bold" href="/"><Logo /></a>
	</div>
	<div class="navbar-end gap-2">
		<label class="btn btn-ghost btn-circle swap swap-rotate">
			<!-- this hidden checkbox controls the state -->
			<input type="checkbox" class="theme-controller hidden" value="dark" />
			<Fa icon={faSun} class="swap-off" />
			<Fa icon={faMoon} class="swap-on" />
		</label>
		<a class="btn btn-primary" href="/checkup/new"> Start a checkup </a>
		<div class="dropdown dropdown-end">
			<button class="btn btn-base-200 btn-circle avatar">
				{#if user?.image}
					<img src={user.image} alt="User avatar" class="rounded-full" />
				{:else}
					{initials}
				{/if}
			</button>
			<div class="dropdown-content bg-base-200 rounded-box z-[1] mt-3 p-2 shadow">
				<div>
					<span class="block text-sm">{user?.name}</span>
					<span class="block text-sm font-medium">{user?.email}</span>
				</div>
				<hr />
				<ul class="menu menu-sm">
					<li><a href="/dashboard">Dashboard</a></li>
					<li><a href="/settings">Settings</a></li>
				</ul>
				<hr class="mb-2" />
				<LogoutButton />
			</div>
		</div>
	</div>
</header>
