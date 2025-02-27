<script lang="ts">
	import { goto } from "$app/navigation";
	import type { SignUpRequest } from "../../../app";
	import { Eye, EyeClosed } from "lucide-svelte";

	let user: SignUpRequest = {
		first_name: "",
		last_name: "",
		username: "",
		email: "",
		password: "",
		confirm_password: "",
	};

	let error_message: string = $state("");
	let showPassword = $state(false);
	let showConfirmPassword = $state(false);

	function togglePasswordVisibility(event: Event) {
		event.preventDefault();
		showPassword = !showPassword;
	}

	function toggleConfirmPasswordVisibility(event: Event) {
		event.preventDefault();
		showConfirmPassword = !showConfirmPassword;
	}

	async function handleSubmit(event: Event) {
		event.preventDefault();
		try {
			const response = await fetch(
				`${import.meta.env.VITE_BACKEND_LOCAL_URL}/auth/signup`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(user),
				},
			);
			const result = await response.json();
			if (!response.ok) {
				error_message = result.error_message || "Something went wrong";
			} else {
				error_message = "";
				goto("/login");
			}
		} catch (error) {
			error_message = "Failed to connect to the server";
			console.error("Error during signup:", error);
		}
	}
</script>

<form onsubmit={handleSubmit} class="w-[280px]">
	<div class="space-y-6">
		<label class="input input-bordered flex items-center gap-2">
			<input
				type="text"
				name="first_name"
				class="grow"
				placeholder="First Name"
				bind:value={user.first_name}
				required
				minlength="3"
			/>
		</label>

		<label class="input input-bordered flex items-center gap-2">
			<input
				type="text"
				name="last_name"
				class="grow"
				placeholder="Last Name"
				bind:value={user.last_name}
				required
				minlength="3"
			/>
		</label>
		<!-- </div> -->

		<label class="input input-bordered flex items-center gap-2">
			<input
				type="text"
				name="username"
				class="grow"
				placeholder="Username"
				bind:value={user.username}
				required
				minlength="3"
				maxlength="20"
			/>
		</label>

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
			<button type="button" onclick={togglePasswordVisibility}>
				{#if showPassword}
					<Eye />
				{:else}
					<EyeClosed />
				{/if}
			</button>
		</label>

		<label class="input input-bordered flex items-center gap-2">
			<input
				type={showConfirmPassword ? "text" : "password"}
				class="grow"
				placeholder="Confirm Password"
				bind:value={user.confirm_password}
				required
			/>
			<button type="button" onclick={toggleConfirmPasswordVisibility}>
				{#if showConfirmPassword}
					<Eye />
				{:else}
					<EyeClosed />
				{/if}
			</button>
		</label>

		<p class="text-red-500">{error_message}</p>
	</div>
	<div class="mt-10">
		<button type="submit" class="btn w-full">
			<span class="">Create account</span>
		</button>
	</div>
	<p class=" text-sm mt-6 text-center">
		Already have an account? <a
			href="/login"
			class="font-semibold underline hover:underline ml-1">Login</a
		>
	</p>
</form>
