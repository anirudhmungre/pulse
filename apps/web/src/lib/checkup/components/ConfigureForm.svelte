<script lang="ts">
	import { enhance } from '$app/forms';
	import Fa from 'svelte-fa';
	import { faArrowRight, faHeart } from '@fortawesome/free-solid-svg-icons';
	import MultiSelectInput from '$lib/core/components/MultiSelectInput.svelte';
	import type { User } from 'database';

	let vitalsGroup: any[] = [];

	let peopleInputValue: string;
	let people: User[] = [];

	const VITALS = [
		{
			icon: faHeart,
			value: 'healthcheck',
			label: 'Health Check',
			description:
				'The Health Check tracks your teams happiness over time. Teams with high health are more productive and have less turnover'
		}
	];

	const searchUsers = async () => {
		const response = await fetch(`/users/${peopleInputValue}`);
		if (!response.ok) {
			people = [];
		} else {
			const data = await response.json();
			people = data;
		}
	};
</script>

<form method="post" class="prose grid grid-cols-2 gap-2" use:enhance>
	<header class="col-span-full">
		<h1>Configure your checkup 🩺</h1>
	</header>
	<section class="col-span-full">
		<legend>My Team</legend>
		<label class="form-control w-full">
			<header class="label">
				<span class="label-text">Name</span>
			</header>
			<input
				type="text"
				name="name"
				class="input input-bordered w-full"
				placeholder="ex. The productive pythons 🐍"
				required
			/>
			<footer class="label">
				<span class="label-text-alt">What is your teams identity? Be creative!</span>
			</footer>
		</label>
		<MultiSelectInput
			bind:inputValue={peopleInputValue}
			bind:items={people}
			searchFn={searchUsers}
			dropDownValueFn={(item) => `${item.name} (${item.email})`}
			chipValueFn={(item) => `${item.name}`}
			formValueFn={(item) => `${item.email}`}
			name="invites"
			placeholder="ex. anirudh.mungre@amunco.com"
			labelFooter="Who belongs on your team?"
		></MultiSelectInput>
	</section>

	<fieldset class="col-span-full">
		<legend>Vitals (Optional)</legend>
		{#each VITALS as { icon, value, label, description }}
			<label
				class="card hover:bg-base-100 hover:ring-accent group cursor-pointer hover:ring-1"
				for="${value}-vital"
				class:bg-base-200={!vitalsGroup.includes(value)}
				class:ring-1={vitalsGroup.includes(value)}
				class:ring-accent={vitalsGroup.includes(value)}
			>
				<section class="card-body py-0">
					<h2 class="card-title">
						<Fa
							{icon}
							class="group-hover:text-accent {vitalsGroup.includes(value) ? 'text-accent' : ''}"
						/>
						{label}
					</h2>
					<p>{description}</p>
				</section>
			</label>
			<input
				type="checkbox"
				class="hidden"
				id="${value}-vital"
				name="vitals"
				bind:group={vitalsGroup}
				{value}
			/>
		{/each}
	</fieldset>

	<section class="col-span-full place-self-end">
		<button type="submit" class="btn btn-primary">
			Let's go <Fa icon={faArrowRight} />
		</button>
	</section>
</form>
