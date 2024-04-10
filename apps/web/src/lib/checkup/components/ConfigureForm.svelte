<script lang="ts">
	import { enhance } from '$app/forms';
	import MultiSelectInput from '$lib/core/components/MultiSelectInput.svelte';
	import { Heading, Helper, Input, Label, Secondary, Checkbox, Button } from 'flowbite-svelte';
	import {
		ArrowRightOutline,
		CaretRightOutline,
		CaretRightSolid,
		HeartSolid
	} from 'flowbite-svelte-icons';

	let vitalsGroup: string[] = [];

	const VITALS = [
		{
			icon: HeartSolid,
			value: 'healthcheck',
			label: 'Health Check',
			description:
				'The Health Check tracks your teams happiness over time. Teams with high health are more productive and have less turnover'
		}
	];
</script>

<form method="post" class="grid grid-cols-2 space-y-4" use:enhance>
	<header class="col-span-2 mb-2">
		<Heading tag="h2">🩺 Configure Your Checkup</Heading>
	</header>
	<section class="col-span-full">
		<Label class="mb-2">Team Name</Label>
		<Input label="Your Team Name" name="name" placeholder="Team Name" required></Input>
		<Helper class="mt-2 text-xs">
			What's your teams identity? Be creative! (ex. The Productive Pythons 🐍)
		</Helper>
	</section>
	<section class="col-span-full">
		<Label class="mb-2">Participants</Label>
		<MultiSelectInput name="participants"></MultiSelectInput>
		<Helper class="mt-2 text-xs">
			What's your teams identity? Be creative! (ex. The Productive Pythons 🐍)
		</Helper>
	</section>
	<section class="col-span-full mt-2">
		<Heading class="col-span-full" tag="h3">Vitals (Optional)</Heading>
		<Secondary class="col-span-full">
			Monitoring vitals can identify your team's weak points before it's too late. Consider
			anonymizing these to encourage honesty
		</Secondary>
		{#each VITALS as { icon, value, label, description }}
			<Checkbox bind:group={vitalsGroup} {value} name="vitals" class="mt-2" custom checked>
				<div
					class="peer-checked:border-primary-600 grid w-full cursor-pointer grid-cols-2 rounded-lg border-2 border-gray-200 bg-gray-100 p-5 font-normal text-gray-500 hover:bg-gray-50 hover:text-gray-600 peer-checked:bg-gray-50 peer-checked:text-gray-600 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-gray-300 dark:peer-checked:bg-gray-800 dark:peer-checked:text-gray-300"
				>
					<svelte:component this={icon} class="text-primary-500 dark:text-primary-400 h-8 w-8" />
					{#if !vitalsGroup.includes(value)}
						<CaretRightOutline
							class="h-8 w-8 place-self-end text-neutral-500 dark:text-neutral-400"
						/>
					{:else}
						<CaretRightSolid class="h-8 w-8 place-self-end text-green-500 dark:text-green-400" />
					{/if}
					<Heading tag="h4" class="col-span-full mt-2 font-semibold">{label}</Heading>
					<Secondary size="sm" weight="semibold" class="col-span-full">{description}</Secondary>
				</div>
			</Checkbox>
		{/each}
	</section>
	<section class="col-span-full flex justify-end">
		<Button type="submit" color="primary" class="">
			Continue to Invite<ArrowRightOutline class="ms-2 h-3.5 w-3.5" />
		</Button>
	</section>
</form>
