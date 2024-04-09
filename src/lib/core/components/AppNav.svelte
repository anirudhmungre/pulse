<script lang="ts">
	import { page } from '$app/stores';
	import LogoutButton from '$lib/auth/components/LogoutButton.svelte';
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Avatar,
		Dropdown,
		DropdownItem,
		DropdownHeader,
		Heading,
		DarkMode,
		GradientButton
	} from 'flowbite-svelte';
	import Logo from './Logo.svelte';

	$: user = $page.data.session?.user;
	$: activeUrl = $page.url.pathname;

	const initials = $page.data.session?.user?.name
		?.split(' ')
		.map((n) => n[0])
		.join('');
</script>

<Navbar>
	<NavBrand href="/app">
		<Heading tag="h1" class="self-center whitespace-nowrap">
			<Logo></Logo>
		</Heading>
	</NavBrand>

	<div class="flex items-center md:order-2">
		<div class="mr-4 flex items-center">
			<div class="flex items-center">
				<DarkMode />
			</div>
			<GradientButton href="/app/checkup/new" color="pinkToOrange" class="ml-4">
				Start a Checkup
			</GradientButton>
		</div>
		{#if user?.image}
			<Avatar id="avatar-menu" src={user.image}></Avatar>
		{:else}
			<Avatar id="avatar-menu">{initials}</Avatar>
		{/if}
		<NavHamburger class1="w-full md:flex md:w-auto" />
	</div>
	<Dropdown placement="bottom" triggeredBy="#avatar-menu">
		<DropdownHeader>
			<span class="block text-sm">{user?.name}</span>
			<span class="block truncate text-sm font-medium">{user?.email}</span>
		</DropdownHeader>
		<DropdownItem activeClass="dark:hover:bg-inherit">Settings</DropdownItem>
		<DropdownItem slot="footer"><LogoutButton></LogoutButton></DropdownItem>
	</Dropdown>
	<NavUl {activeUrl}>
		<NavLi href="/app">Dashboard</NavLi>
		<NavLi href="/app/team">Team</NavLi>
		<NavLi href="/app/docs">Docs</NavLi>
	</NavUl>
</Navbar>
