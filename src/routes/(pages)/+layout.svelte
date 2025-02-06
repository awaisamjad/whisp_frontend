<script lang="ts">
	import { goto } from "$app/navigation";
	import type { CreatePostRequest } from "../../app";
	import FileInput from "../../components/FileInput.svelte";
	import { isUserLoggedIn, signOut } from "../../utils.svelte";
	import { main_background_colour } from "../state.svelte";
	import Cookies from "js-cookie";
	import { House, CirclePlus, Settings, X, Menu } from "lucide-svelte";
	let { data, children } = $props();

	let error_message = $state("");
	let showSidebar = $state(false);

	const username = Cookies.get("username") || "";
	const user_id = Cookies.get("user_id") || "";

	// const url = data.url;

	let post_content = $state("");

	async function createPost() {
		try {
			let createPostRequest: CreatePostRequest = {
				content: post_content,
				user_id: user_id,
				username: username,
			};

			const url = `${import.meta.env.VITE_BACKEND_LOCAL_URL}/create-post`;
			const response = await fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(createPostRequest),
			});
			const result = await response.json();
			if (!response.ok) {
				console.error(result.error_message);
				error_message = result.error_message || "Something went wrong";
			} else {
				console.log("Successfully created post");
			}
		} catch (error) {
			console.error("Error creating post", error);
		}
	}
</script>

<div
	id="main"
	class="grid h-screen grid-rows-[auto_1fr_auto] grid-cols-1
	sm:grid-rows-[auto_1fr_auto] sm:grid-cols-[1fr_3fr_1fr]
	{main_background_colour.colour}
"
>
	<nav class="col-span-full grid grid-cols-3 gap-4 p-4 border-b-2">
		<!-- Menu button for mobile -->
		<button
			onclick={() => {
				showSidebar = true;
				main_background_colour.colour = "bg-base-300";
			}}
			class="col-span-1 sm:hidden flex place-content-left w-9"
		>
			<Menu size={48} />
		</button>

		<!-- Image for larger screens -->
		<div class="hidden sm:block col-span-1 w-10">
			<enhanced:img
				src="/static/favicon.png"
				alt="Larger Screen"
				class="w-full h-auto"
			/>
		</div>

		<!-- Logo -->
		<div class="col-span-1 sm:col-span-1 flex place-content-center">
			<a href="/feed" class="text-5xl font-semibold hover:underline">
				Whisp
			</a>
		</div>

		<!-- Account -->
		{#if username !== ""}
			<div class="col-span-1 flex place-content-end">
				<a href="/user/{username}">
					<button class="">
						<div class="avatar">
							<div class="w-11 rounded-full ring hover:ring-4">
								<img
									src={Cookies.get("avatar") ||
										"default_avatar.webp"}
									alt="profile"
								/>
							</div>
						</div>
					</button>
				</a>
			</div>
		{/if}
	</nav>

	{#if showSidebar === true}
		<!-- ? sm:hidden closes the sidebar at sm>= -->
		<aside
			id="sidebar"
			class="menu fixed z-10 bg-secondary flex h-screen flex-col justify-between w-3/4 transition-transform duration-300 ease-in-out transform translate-x-0 sm:hidden"
		>
			<div class="px-4 py-6">
				<div class="flex flex-row justify-end">
					<button
						onclick={() => {
							showSidebar = false;
							main_background_colour.colour = "bg-base";
						}}
						class="w-8"
					>
						<X size={48} color="#3e9392" />
					</button>
				</div>
			</div>
			<!-- {@render authenticationButtons()} -->
		</aside>
	{/if}

	<aside
		id="left-sidebar"
		class="hidden sm:flex sm:flex-col sm:items-center sm:justify-center border-r-2 row-start-2 col-start-1 col-end-2"
	>
		<!-- {@render authenticationButtons()} -->
	</aside>

	<main class="row-start-2 overflow-y-auto">
		{@render children()}
	</main>

	<aside
		id="right-sidebar"
		class="hidden sm:block row-start-2 col-start-3 col-end-4 border-l-2"
	></aside>

	<!-- svelte-ignore a11y_consider_explicit_label -->
	<div class="btm-nav border-t-2">
		{#if isUserLoggedIn()}
			<div class="">
				<a href="/feed" class="">
					<House size={48} />
				</a>
			</div>
			<div class="" id="create-post-button">
				<button
					class="btn w-20 bg-transparent border-transparent hover:border-transparent hover:bg-base-300 shadow-none text-7xl flex items-center justify-center hover:bg-transparent"
					onclick={() =>
						document.getElementById("modal")?.showModal()}
				>
					<CirclePlus size={48} />
				</button>
				<dialog id="modal" class="modal">
					<div class="modal-box">
						{#if isUserLoggedIn()}
							<textarea
								class="textarea textarea-bordered w-full mb-4 h-32 max-h-32"
								placeholder="..."
								required
								bind:value={post_content}
							></textarea>
							<p class=" text-error">{error_message}</p>
							<div class="join w-full">
								<FileInput />
								<button class="btn join-item w-1/3"
									>Emoji</button
								>
								<button
									class="btn join-item w-1/3 bg-info text-info-content hover:text-white"
									onclick={() => {
										createPost();
										document
											.getElementById("modal")
											?.closeModal();
									}}>Post</button
								>
							</div>
						{:else}
							<p class=" flex justify-center gap-1 text-lg">
								Please <a
									href="/signup"
									class="text-info hover:underline">sign up</a
								>
								or
								<a
									href="/login"
									class="text-info hover:underline">log in</a
								> to create a post.
							</p>
						{/if}
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
					<Settings size={48} />
				</button>
			</a>
		{:else}
			<div class="flex flex-row justify-evenly">
				<button
					class="btn btn-secondary sm:w-32 md:w-40 lg:w-48 xl:w-64 mx-4"
					onclick={() => goto("/signup")}>Sign Up</button
				>
				<button
					class="btn btn-accent sm:w-32 md:w-40 lg:w-48 xl:w-64 mx-4"
					onclick={() => goto("/login")}>Log In</button
				>
			</div>
		{/if}
	</div>
</div>
