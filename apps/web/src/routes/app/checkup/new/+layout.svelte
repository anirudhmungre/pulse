<script lang="ts">
	import { page } from '$app/stores';
	import { StepIndicator } from 'flowbite-svelte';

	const steps: string[] = ['Start', 'Configure', 'Invite'];

	$: activePathEnd = $page.url.pathname.split('/').pop();
	$: currentStep = activePathEnd === 'review' ? 3 : activePathEnd === 'configure' ? 2 : 1;
</script>

<StepIndicator hideLabel {steps} {currentStep} color="primary" />
<slot />
