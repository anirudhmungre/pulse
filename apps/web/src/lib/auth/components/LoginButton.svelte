<script lang="ts">
	import Fa from 'svelte-fa';
	import { faGoogle } from '@fortawesome/free-brands-svg-icons';
	export let provider: 'google';

	const providerStyleMap = {
		google: {
			color: 'red',
			icon: faGoogle
		}
	};
</script>

<form method="POST" action="/login">
	<input type="hidden" name="providerId" value={provider} />
	<div class="form-control">
		<button type="submit" class="btn btn-block">
			<Fa icon={providerStyleMap[provider].icon} />
			<span>Continue with <span class="capitalize">{provider}</span></span>
		</button>
	</div>
</form>
