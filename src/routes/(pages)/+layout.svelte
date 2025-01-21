<script lang="ts">
	import type { CreatePostRequest } from "../../app";
	let { children } = $props();

	let showSidebar = $state(false);

	let post_content = $state("");
	async function createPost() {
		console.log(post_content);
		try {
			let createPostRequest: CreatePostRequest = {
				content: post_content,
				user_id: "4",
			};

			const response = await fetch("http://localhost:8000/create-post", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(createPostRequest),
			});
			const result = await response.json();
			if (!response.ok) {
				console.error(result.error_message);
				// error_message = result.error_message || "Something went wrong";
			} else {
				console.log("Successfully created post");
				// error_message = "";
				// username = result.username;
				// goto(`/${username}`);
			}
		} catch (error) {
			// error_message = "Failed to connect to the server";
			console.error("Error creating post", error);
		}
	}
</script>

<div
	class="grid h-screen grid-rows-[auto_1fr_auto] grid-cols-1
	sm:grid-rows-[auto_1fr_auto] sm:grid-cols-[1fr_3fr_1fr]
"
>
	<nav class="col-span-full grid grid-cols-3 gap-4 p-4 border-b-2">
		<!-- Menu button for mobile -->
		<button
			onclick={() => {
				showSidebar = true;
			}}
			class="col-span-1 sm:hidden flex place-content-left w-9"
		>
			<enhanced:img src="/static/menu.svg" alt="Toggle Sidebar" />
		</button>

		<!-- Image for larger screens -->
		<div class="hidden sm:block col-span-1 w-10">
			<enhanced:img src="/static/favicon.png" alt="Larger Screen" class="w-full h-auto" />
		</div>

		<!-- Logo -->
		<div class="col-span-1 sm:col-span-1 flex place-content-center">
			<a href="/feed" class="text-4xl font-semibold"> Whisp </a>
		</div>

		<!-- Account -->
		<div class="col-span-1 flex place-content-end">
			<a href="/account">
				<button class="">
					<div class="avatar">
						<div class="w-11 rounded-full ring">
							<img
								src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
								alt="profile"
							/>
						</div>
					</div>
				</button>
			</a>
		</div>
	</nav>

	{#if showSidebar === true}
		<aside
			id="sidebar"
			class="menu fixed z-10 bg-secondary flex h-screen flex-col justify-between min-w-72 transition-transform duration-300 ease-in-out transform translate-x-0"
		>
			<div class="px-4 py-6">
				<div class="flex flex-row justify-end">
					<button
						onclick={() => {
							showSidebar = false;
						}}
						class="w-8"
					>
						<enhanced:img src="/static/x.svg" class="" alt="" />
					</button>
				</div>
			</div>
		</aside>
	{/if}

	<aside
		id="left-sidebar"
		class="hidden sm:block border-r-2 row-start-2 col-start-1 col-end-2"
	></aside>

	<main class="row-start-2 overflow-y-auto">
		{@render children()}
	</main>

	<aside
		id="right-sidebar"
		class="hidden sm:block row-start-2 col-start-3 col-end-4 border-l-2"
	>
</aside>

	<div class="btm-nav border-t-2">
		<a href="/feed">
			<button
				class="btn bg-transparent border-transparent hover:border-transparent hover:bg-base-300 shadow-none hover:bg-transparent"
			>
				<enhanced:img src="/static/home.png" alt="home" class="w-10" />
			</button>
		</a>
		<div class="" id="create-post-button">
			<!-- svelte-ignore a11y_consider_explicit_label -->
			<button
				class="btn w-20 bg-transparent border-transparent hover:border-transparent hover:bg-base-300 shadow-none text-7xl flex items-center justify-center hover:bg-transparent"
				onclick={() => document.getElementById("modal")?.showModal()}
			>
				<enhanced:img src="/static/create_post.png" alt="create post" class="text-sm" />
			</button>
			<dialog id="modal" class="modal">
				<div class="modal-box">
					<!-- <h3 class="text-lg font-bold mb-4">What are you going to say?</h3> -->
					<textarea
						class="textarea textarea-bordered w-full mb-4 h-32 max-h-32"
						placeholder="..."
						required
						bind:value={post_content}
					></textarea>
					<div class="join w-full">
						<form class="w-1/3 flex items-center justify-center">
							<label
								for="customFileInput"
								class="w-full h-full outline"
							>
								Input
							</label>
							<input
								type="file"
								id="customFileInput"
								class="hidden"
							/>
						</form>
						<button class="btn join-item w-1/3">Emoji</button>
						<button
							class="btn join-item w-1/3 bg-blue-500"
							onclick={() => createPost()}>Post</button
						>
					</div>
				</div>
				<form method="dialog" class="modal-backdrop">
					<button>close</button>
				</form>
			</dialog>
		</div>
		<a href="/settings">
			<button
				class="btn bg-transparent border-transparent hover:border-transparent hover:bg-base-300 shadow-none hover:bg-transparent"
			>
				<enhanced:img src="/static/settings.png" alt="settings" class="w-10" />
			</button>
		</a>
	</div>
</div>
