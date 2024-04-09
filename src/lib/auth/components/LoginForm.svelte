<script lang="ts">
	import { Card, Button, Label, Input, Checkbox, Hr, Heading, Span } from 'flowbite-svelte';
	import LoginButton from './LoginButton.svelte';
	import Logo from '$lib/core/components/Logo.svelte';
</script>

<Card>
	<form class="flex flex-col space-y-6" action="/">
		<Heading tag="h2">Login to get a <Logo /></Heading>
		<Label class="space-y-2">
			<span>Email</span>
			<Input type="email" name="email" placeholder="name@company.com" required />
		</Label>
		<Label class="space-y-2">
			<span>Your password</span>
			<Input type="password" name="password" placeholder="•••••" required />
		</Label>
		<div class="flex items-start">
			<Checkbox>Remember me</Checkbox>
			<a href="/" class="ms-auto text-sm text-primary-700 hover:underline dark:text-primary-500">
				Lost password?
			</a>
		</div>
		<Button type="submit" class="w-full">Login to your account</Button>
		<Hr classHr="my-2 w-64">Or</Hr>
		<LoginButton provider="google" />
		<div class="text-sm font-medium text-gray-500 dark:text-gray-300">
			Not registered? <a href="/" class="text-primary-700 hover:underline dark:text-primary-500">
				Create account
			</a>
		</div>
	</form>
</Card>
