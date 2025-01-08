<script lang="ts">

	import { initSlots } from "$lib/layout-slots.svelte.js";

	let { children } = $props();

	const slots = initSlots();
</script>

<div class="grid h-screen grid-rows-[auto_1fr_auto] grid-cols-[1fr_3fr_1fr]">
	{@render children()}
	<!-- Navigation -->
  <nav class="col-span-full grid grid-cols-[20fr_60fr_20fr] items-center gap-4 p-4 bg-gray-800 border-b-2 border-text">
		<!-- Logo -->
		<div class="col-span-1 flex outline place-content-center">
			<a href="/" class="text-xl font-bold">Logo</a>
		</div>

		<!-- Center Title -->
		<div class="col-span-1 flex outline place-content-center">
			<h1 class="text-2xl font-semibold">Whisp</h1>
		</div>

		<!-- Sign-In Button -->
		<div class="col-span-1 flex place-content-center">
      <input 
        type="text" 
        placeholder="Search..." 
        class="bg-gray-700 text-white font-medium py-2 px-4 rounded w-full"
      />
		</div>
	</nav>

	<!-- Left Sidebar -->
	<aside class="bg-gray-800 border-r-2 row-start-2 row-end-3 col-start-1 col-end-2">
		{@render slots.left_sidebar()}
	</aside>

	<!-- Main Content (Scrollable) -->
	<main class="bg-gray-700 row-start-2 row-end-3 col-start-2 col-end-3 overflow-y-auto">
		{@render slots.main_content()}
	</main>

	<!-- Right Sidebar -->
	<aside class="bg-gray-800 row-start-2 row-end-3 col-start-3 col-end-4 border-l-2">
		{@render slots.right_sidebar()}
	</aside>

</div>
