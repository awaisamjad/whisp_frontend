<script lang="ts">
	import { goto } from "$app/navigation";
	import { browser } from "$app/environment";
	import { username, auth_token } from "./state.svelte";
	// import { getItemWithExpiration } from "../../../../utils.svelte";
	// import { setItemWithExpiration } from "../../../../utils.svelte";
	import type { LogInRequest, LogInResponse } from "../../../app";
	let error_message = $state("");


	function setCookie(
		name: any,
		value: string | number | boolean,
		days: number,
	) {
		const expires = new Date(Date.now() + days * 864e5).toUTCString(); // Calculate expiration date
		// document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
		document.cookie = `${name}=${value}; expires=${expires}; path=/`;
	}

	function getCookie(name: any) {
		const value = `; ${document.cookie}`;
		const parts = value.split(`; ${name}=`);
		if (parts.length === 2)
			return parts.pop()?.split(";").shift();
		return null; // Return null if the cookie does not exist
	}

	let showPassword = $state(false);

	function togglePasswordVisibility() {
		showPassword = !showPassword;
	}

	let user: LogInRequest = {
		email: "",
		password: "",
	};

	async function handleSubmit(event: Event) {
		try {
			const response = await fetch("http://localhost:8000/auth/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(user),
			});

			const result: LogInResponse = await response.json();
			console.log(result);
			// setItemWithExpiration("username", result.username, 1);
			// setItemWithExpiration("auth_token", result.auth_token, 1);
			// setItemWithExpiration("user_id", result.user_id, 1);
			setCookie("username", result.username, 30);
			setCookie("auth_token", result.auth_token, 30);
			setCookie("user_id", result.user_id, 30);
			// username.username = result.username
			// auth_token.auth_token = result.auth_token

			if (!response.ok) {
				// error_message = result.error_message || "Something went wrong";
				error_message = "Something went wrong";
			} else {
				goto(`/feed`);
			}
		} catch (error) {
			error_message = "Failed to connect to the server";
			console.error("Error during log-in:", error);
		}
	}
</script>

<form
	on:submit|preventDefault={handleSubmit}
	class="w-[280px] sm:w-96 mt-5 shrink"
>
	<div class="space-y-6">
		<label class="input input-bordered flex items-center gap-2">
			<input
				type="email"
				name="email"
				class="grow"
				placeholder="Email"
				bind:value={user.email}
				required
			/>
		</label>

		<label class="input input-bordered flex items-center gap-2">
			<input
				type={showPassword ? "text" : "password"}
				class="grow"
				placeholder="Password"
				bind:value={user.password}
				required
			/>
			<button type="button" on:click={togglePasswordVisibility}>
				<img
					src={showPassword ? "eye_opened.svg" : "eye_closed.svg"}
					class="w-7"
					alt=""
				/>
			</button>
		</label>
		<p class="text-red-500">{error_message}</p>
	</div>
	<div class="mt-6 sm:mt-10">
		<button type="submit" class="btn w-full">
			<span>Log In</span>
		</button>
	</div>
	<p class="text-sm mt-4 sm:mt-6 text-center">
		Dont have an account? <a
			href="/signup"
			class="font-semibold underline hover:underline ml-1">Sign Up</a
		>
	</p>
</form>
