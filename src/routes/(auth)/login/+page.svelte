<script lang="ts">
	import { goto } from "$app/navigation";
	import { username } from "./state.svelte";
	import { getItemWithExpiration, setItemWithExpiration } from "../../../utils";
	let error_message = $state("")
	
	let user = {
		email: "",
		password: "",
	};

	let showPassword = $state(false);

	function togglePasswordVisibility() {
		showPassword = !showPassword;
	}

	async function handleSubmit(event: Event) {
		try {
			const response = await fetch("http://localhost:8000/auth/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(user),
			});

			const result = await response.json();
			console.log(result);
			// localStorage.setItem("auth_token", result.token);
			// localStorage.setItem("username", result.username);
			setItemWithExpiration("auth_token", result.token, 0.3)
			setItemWithExpiration("username", result.username, 0.3)
			username.username = result.username
			if (!response.ok) {
				error_message = result.error_message || "Something went wrong";
			} else {
				// Redirect after successful login
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
			class="font-semibold underline hover:underline ml-1"
			>Sign Up</a
		>
	</p>
</form>
