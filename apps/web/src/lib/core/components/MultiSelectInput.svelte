<script lang="ts">
	import _ from 'lodash';
	import ChipList from './ChipList.svelte';

	export let placeholder = 'Search...';
	export let name: string;
	export let labelFooter: string = '';
	export let items: any[] = [
		{ value: 'us', name: 'United States' },
		{ value: 'ca', name: 'Canada' },
		{ value: 'fr', name: 'France' },
		{ value: 'jp', name: 'Japan' },
		{ value: 'en', name: 'England' },
		{ value: 'en', name: 'Englad' },
		{ value: 'en', name: 'Engnd' },
		{ value: 'en', name: 'Eland' },
		{ value: 'en', name: 'Engnod' },
		{ value: 'en', name: 'Enland' }
	];

	let inputValue = '';
	let show = false;

	const updateOptions = (e) => {
		show = true;
		console.log(inputValue);
	};

	let selected: any[] = [];
	const selectOption = (select) => {
		console.log(select);
		if (selected.includes(select)) {
			clearThisOption(select);
		} else {
			if (!selected.includes(select)) selected = [...selected, select];
		}
	};

	const clearAll = (e) => {
		e.stopPropagation();
		selected = [];
	};

	const clearThisOption = (select) => {
		if (selected.includes(select)) {
			selected = selected.filter((o) => o !== select);
		}
	};
</script>

<label class="label-text capitalize" for={name}>{name}</label>
<ChipList bind:items={selected} action="remove" />
<div class="form-control h-full w-full">
	<div class="dropdown w-full">
		<input
			type="search"
			name={name + '-search'}
			class="input input-bordered w-full"
			on:blur={() => (show = false)}
			on:click={() => (show = !show)}
			on:input={_.debounce(updateOptions, 500)}
			on:change
			on:focus
			on:keydown
			on:keypress
			on:keyup
			on:mouseenter
			on:mouseleave
			on:mouseover
			on:paste
			{placeholder}
		/>
		<ul
			class="menu dropdown-content bg-base-200 text-base-content rounded-box not-prose z-[1] gap-y-1 p-2 shadow"
		>
			{#each items as item}
				<li>
					<button
						type="button"
						class:active={selected.includes(item)}
						on:click={() => selectOption(item)}
					>
						{item.name}
					</button>
				</li>
			{/each}
		</ul>
	</div>
	<footer class="label">
		<label class="label-text-alt" for={name}>{labelFooter}</label>
	</footer>
</div>
