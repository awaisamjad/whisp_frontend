<script lang="ts">
	import { initSlots } from "$lib/layout-slots.svelte.js";

	let { children } = $props();

	const slots = initSlots();

	let showSidebar = $state(false);

	import { onMount } from "svelte";

	let footer: HTMLElement;
	let mainContent: HTMLElement;

	onMount(() => {
		let lastScrollTop = 0;
		mainContent.addEventListener("scroll", () => {
			let scrollTop = mainContent.scrollTop;
			if (scrollTop > lastScrollTop) {
				footer.style.transform = "translateY(100%)"; // Hide footer
			} else {
				footer.style.transform = "translateY(0)"; // Show footer
			}
			lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
		});
	});
</script>

<!-- <div class="grid h-screen grid-rows-[auto_1fr_auto] grid-cols-[1fr_3fr_1fr]">
	{@render children()}
	<nav
		class="col-span-full grid grid-cols-[20fr_60fr_20fr] items-center gap-4 p-4 bg-gray-800 border-b-2 border-text"
	>
		<div class="col-span-1 flex place-content-center">
			<a href="/" class="text-xl font-bold">Logo</a>
		</div>

		<div class="col-span-1 flex place-content-center">
			<h1 class="text-2xl font-semibold">Whisp</h1>
		</div>

		<div class="col-span-1 flex place-content-end">
			<a
				href="/account"
				class="rounded-full bg-primary outline w-10 h-10 overflow-hidden"
			>
				<img
					src="https://i.pravatar.cc/40?img=7"
					alt="profile"
					class="w-full h-full object-cover"
				/>
			</a>
		</div>
	</nav>

	<aside
		class="hidden sm:block bg-gray-800 border-r-2 row-start-2 row-end-3 col-start-1 col-end-2"
	>
		{@render slots.left_sidebar()}
	</aside>

	<main
		class="bg-gray-700 row-start-2 row-end-3 col-start-2 col-end-3 overflow-y-auto"
	>
		{@render slots.main_content()}
	</main>

	<aside
		class="hidden sm:block bg-gray-800 row-start-2 row-end-3 col-start-3 col-end-4 border-l-2"
	>
		{@render slots.right_sidebar()}
	</aside>
</div> -->

<div
	class="grid h-screen grid-rows-[auto_1fr_auto] grid-cols-1
	sm:grid-rows-[auto_1fr_auto] sm:grid-cols-[1fr_3fr_1fr]
"
>
	{@render children()}

	<nav class="col-span-full grid grid-cols-3 gap-4 p-4 border-b-2">
		<!-- Menu button for mobile -->
		<button
			onclick={() => {
				showSidebar = true;
			}}
			class="col-span-1 sm:hidden flex place-content-left w-9"
		>
			<img src="menu.svg" alt="Toggle Sidebar" />
		</button>

		<!-- Image for larger screens -->
		<div class="hidden sm:block col-span-1 w-10">
			<img src="favicon.png" alt="Larger Screen" class="w-full h-auto" />
		</div>

		<!-- Logo -->
		<div class="col-span-1 sm:col-span-1 flex place-content-center">
			<a href="/" class="text-4xl font-semibold">Whisp</a>
		</div>

		<!-- Profile link -->
		<div class="col-span-1 flex place-content-end">
			<a
				href="/account"
				class="rounded-full bg-primary outline w-10 h-10 overflow-hidden"
			>
				<img
					src="https://i.pravatar.cc/40?img=7"
					alt="profile"
					class="w-full h-full object-cover"
				/>
			</a>
		</div>
	</nav>

	{#if showSidebar === true}
		<aside
			id="sidebar"
			class="fixed z-10 bg-black flex h-screen flex-col justify-between min-w-72 transition-transform duration-300 ease-in-out transform translate-x-0"
		>
			<div class="px-4 py-6">
				<div class="flex flex-row justify-between">
					<span
						class="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600"
					>
						Logo
					</span>

					<button
						onclick={() => {
							showSidebar = false;
						}}
						class="w-8"
					>
						<img src="x.svg" alt="" />
					</button>
				</div>

				<ul class="mt-6 space-y-1">
					<li>
						<a
							href="#"
							class="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
						>
							General
						</a>
					</li>

					<li>
						<details
							class="group [&_summary::-webkit-details-marker]:hidden"
						>
							<summary
								class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
							>
								<span class="text-sm font-medium"> Teams </span>

								<span
									class="shrink-0 transition duration-300 group-open:-rotate-180"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="size-5"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fill-rule="evenodd"
											d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
											clip-rule="evenodd"
										/>
									</svg>
								</span>
							</summary>

							<ul class="mt-2 space-y-1 px-4">
								<li>
									<a
										href="#"
										class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
									>
										Banned Users
									</a>
								</li>

								<li>
									<a
										href="#"
										class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
									>
										Calendar
									</a>
								</li>
							</ul>
						</details>
					</li>

					<li>
						<a
							href="#"
							class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
						>
							Billing
						</a>
					</li>

					<li>
						<a
							href="#"
							class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
						>
							Invoices
						</a>
					</li>

					<li>
						<details
							class="group [&_summary::-webkit-details-marker]:hidden"
						>
							<summary
								class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
							>
								<span class="text-sm font-medium">
									Account
								</span>

								<span
									class="shrink-0 transition duration-300 group-open:-rotate-180"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="size-5"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fill-rule="evenodd"
											d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
											clip-rule="evenodd"
										/>
									</svg>
								</span>
							</summary>

							<ul class="mt-2 space-y-1 px-4">
								<li>
									<a
										href="#"
										class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
									>
										Details
									</a>
								</li>

								<li>
									<a
										href="#"
										class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
									>
										Security
									</a>
								</li>

								<li>
									<form action="#">
										<button
											type="submit"
											class="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
										>
											Logout
										</button>
									</form>
								</li>
							</ul>
						</details>
					</li>
				</ul>
			</div>
		</aside>
	{/if}

	<aside class="hidden sm:block border-r-2 row-start-2 col-start-1 col-end-2">
		{@render slots.left_sidebar()}
	</aside>

	<main class="row-start-2 overflow-y-auto" bind:this={mainContent}>
		{@render slots.main_content()}
	</main>

	<aside class="hidden sm:block row-start-2 col-start-3 col-end-4 border-l-2">
		{@render slots.right_sidebar()}
	</aside>

	<div class="btm-nav border-t-2">
		<a href="/feed" class="border-r-2">
			<button>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
					/>
				</svg>
				Feed
			</button>
		</a>
		<a href="/explore">
			<button class="active">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
				Explore
			</button>
		</a>
		<a href="/search">
			<button>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
					/>
				</svg>
				Search
			</button>
		</a>
		<a href="/settings">
			<button>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
					/>
				</svg>
				Settings
			</button>
		</a>
	</div>
</div>
