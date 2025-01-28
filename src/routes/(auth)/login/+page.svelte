<script lang="ts">
	import { goto } from "$app/navigation";
	import Cookies from "js-cookie";

	import type { LogInRequest, LogInResponse } from "../../../app";
	let error_message = $state("");

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
			Cookies.set("username", result.username, { expires: 30 });
			Cookies.set("auth_token", result.auth_token, { expires: 30 });
			Cookies.set("user_id", String(result.user_id), { expires: 30 });

			if (!response.ok) {
				//? Keep the error message vague
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
			<button type="button" on:click={togglePasswordVisibility} class=" hover:bg-base-300 rounded-lg p-2">
				<img
					src={showPassword ? "eye_opened.svg" : "eye_closed.svg"}
					class="w-6"
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
