<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import * as _ from 'lodash';
	import {
		Input,
		type FormSizeType,
		type SelectOptionType,
		Dropdown,
		DropdownItem,
		Label
	} from 'flowbite-svelte';
	import { CaretDownSolid, CaretUpSolid, PlusOutline } from 'flowbite-svelte-icons';

	export let size: FormSizeType = 'md';
	export let placeholder = 'Search...';
	export let name: string;
	export let items: SelectOptionType<any>[] = [
		{ value: 'us', name: 'United States' },
		{ value: 'ca', name: 'Canada' },
		{ value: 'fr', name: 'France' },
		{ value: 'jp', name: 'Japan' },
		{ value: 'en', name: 'England' }
	];

	const defaultClass =
		'flex w-full items-center disabled:cursor-not-allowed disabled:opacity-50 rtl:text-right';
	const borderClass = 'border-gray-300 dark:border-gray-600 rounded-md';
	const ringClass =
		'focus-within:border-primary-500 focus-within:ring-primary-500 dark:focus-within:border-primary-500 dark:focus-within:ring-primary-500';
	const colorClass =
		'bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400';
	const sizes = {
		sm: 'p-2',
		md: 'p-2.5',
		lg: 'p-3'
	};

	let inputValue = '';
	let show = false;

	const updateOptions = (e) => {
		show = true;
		console.log(inputValue);
	};

	const selectOption = (select) => {
		console.log(select);
		if (selected.includes(select.value)) {
			clearThisOption(select);
		} else {
			if (!selected.includes(select.value)) selected = [...selected, select.value];
		}
	};

	const clearAll = (e) => {
		e.stopPropagation();
		value = [];
	};

	const clearThisOption = (select) => {
		if (value.includes(select.value)) {
			value = value.filter((o) => o !== select.value);
		}
	};
</script>

<label
	for="{name}-search"
	class={twMerge(defaultClass, borderClass, ringClass, colorClass, sizes[size])}
>
	<span>hi</span>
	<span>hi</span>
	<span>hi</span>
	<span>hi</span>
	<input
		type="text"
		id="{name}-search"
		class="flex-grow appearance-none border-none bg-transparent focus:ring-0"
	/>
</label>

<div class="h-full w-full">
	<Input
		bind:value={inputValue}
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
		type="search"
		{placeholder}
		{size}
		{...$$restProps}
		class={twMerge(defaultClass, $$props.class)}
	>
		<div slot="left" class="flex items-center justify-start gap-1">
			<span>hu</span>
			<span>hu</span>
			<span>hu</span>
			<span>hu</span>
			<span>hu</span>
			<span>hu</span>
		</div>
		<div slot="right" class="flex items-center justify-end gap-1">
			{#if show}
				<CaretUpSolid />
			{:else}
				<CaretDownSolid />
			{/if}
			<PlusOutline />
		</div>
	</Input>
	<Dropdown class="z-10 w-full">
		{#each items as item (item.name)}
			<DropdownItem on:click={() => selectOption(item)}>
				{item.name}
			</DropdownItem>
		{/each}
	</Dropdown>
</div>
