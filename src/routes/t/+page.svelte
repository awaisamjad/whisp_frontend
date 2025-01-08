<script>
	import { onMount } from 'svelte';

	/**
	 * @type {{ message: any; status: any; } | null}
	 */
	let data = null;

	// Fetch JSON from the backend
	async function fetchData() {
		try {
			const response = await fetch('http://localhost:8000/api/data');
			if (!response.ok) throw new Error('Failed to fetch data');
			data = await response.json();
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	}

	// Call fetchData when the component is mounted
	onMount(() => {
		fetchData();
	});
</script>

{#if data}
	<p>Message: {data.message}</p>
	<p>Status: {data.status}</p>
{:else}
	<p>Loading...</p>
{/if}
