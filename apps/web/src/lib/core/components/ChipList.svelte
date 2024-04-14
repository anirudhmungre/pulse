<script lang="ts">
	import Fa from 'svelte-fa';
	import { faClose } from '@fortawesome/free-solid-svg-icons';

	export let items: any[] = [];
	export let action: 'none' | 'remove' = 'none';

	const removeItem = (item) => {
		items = items.filter((i) => i !== item);
	};

	const performAction = (item) => {
		if (action === 'remove') {
			removeItem(item);
		}
	};
</script>

<ul class="not-prose mb-1 flex h-auto w-full flex-wrap items-center gap-1">
	{#each items as item}
		<li>
			<button type="button" class="badge badge-accent gap-2" on:click={() => performAction(item)}>
				{item.name}
				{#if action === 'remove'}
					<Fa icon={faClose} />
				{/if}
			</button>
		</li>
	{/each}
</ul>
