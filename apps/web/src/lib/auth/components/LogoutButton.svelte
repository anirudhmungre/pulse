<script lang="ts">
	import { Button } from 'flowbite-svelte';
</script>

<form method="POST" action="/logout">
	<Button type="submit" color="red" class="w-full min-w-min">Logout</Button>
</form>
