<script lang="ts">
	import ChipList from './ChipList.svelte';

	export let searchFn: () => any;
	export let dropDownValueFn: (item: any) => string;
	export let chipValueFn: (item: any) => string;
	export let formValueFn: (item: any) => string;
	export let inputValue = '';
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

	let show = false;

	let selected: any[] = [];
	const selectOption = (select) => {
		if (selected.includes(select)) {
			clearThisOption(select);
		} else {
			if (!selected.includes(select)) selected = [...selected, select];
		}
	};

	const clearThisOption = (select) => {
		if (selected.includes(select)) {
			selected = selected.filter((o) => o !== select);
		}
	};

	let timeout: NodeJS.Timeout;
	const handleSearch = async () => {
		if (timeout) clearTimeout(timeout);

		timeout = setTimeout(searchFn, 500);
	};
</script>

<label class="label-text capitalize" for={name}>{name}</label>
<ChipList bind:items={selected} action="remove" {chipValueFn} />
{#each selected as value}
	<input type="hidden" {name} value={formValueFn(value)} />
{/each}
<div class="form-control h-full w-full">
	<div class="dropdown w-full">
		<input
			type="search"
			name={name + '-search'}
			class="input input-bordered w-full"
			bind:value={inputValue}
			on:blur={() => (show = false)}
			on:click={() => (show = !show)}
			on:input={() => handleSearch()}
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
		{#if items.length > 0}
			<ul
				class="menu dropdown-content bg-base-200 text-base-content rounded-box not-prose z-[1] gap-y-1 p-2 shadow"
			>
				{#each items as item}
					<li>
						<button
							type="button"
							class="btn"
							class:btn-accent={selected.includes(item)}
							on:click={() => selectOption(item)}
						>
							{dropDownValueFn(item)}
						</button>
					</li>
				{/each}
			</ul>
		{/if}
	</div>
	<footer class="label">
		<label class="label-text-alt" for={name}>{labelFooter}</label>
	</footer>
</div>
