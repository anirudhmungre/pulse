<script lang="ts">
	import Logo from '$lib/core/components/Logo.svelte';
	import LoginButton from './LoginButton.svelte';
</script>

<div class="card w-full max-w-sm shrink-0 shadow-2xl">
	<section class="card-body">
		<h1 class="card-title">
			Login to get a
			<Logo />
		</h1>
		<form action="/">
			<div class="form-control">
				<label class="label" for="email">
					<span class="label-text">Email</span>
				</label>
				<input type="email" placeholder="email" class="input input-bordered" required />
			</div>
			<div class="form-control">
				<label class="label" for="password">
					<span class="label-text">Password</span>
				</label>
				<input type="password" placeholder="password" class="input input-bordered" required />
			</div>
			<div class="form-control mt-6">
				<button class="btn btn-primary">Login</button>
			</div>
		</form>
		<div class="divider">Or</div>
		<LoginButton provider="google" />
	</section>
</div>
