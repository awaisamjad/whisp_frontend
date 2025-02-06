<script lang="ts">
	import { goto } from "$app/navigation";
	import type { SignUpRequest } from "../../../app";
	import { Eye, EyeClosed } from "lucide-svelte";

	let error_message: string = $state("");
	let user: SignUpRequest = {
		first_name: "",
		last_name: "",
		username: "",
		email: "",
		password: "",
		confirm_password: "",
	};

	let showPassword = $state(false);

	function togglePasswordVisibility() {
		showPassword = !showPassword;
	}

	let showConfirmPassword = $state(false);

	function toggleConfirmPasswordVisibility() {
		showConfirmPassword = !showConfirmPassword;
	}

	async function handleSubmit(event: Event) {
		try {
			const response = await fetch(`${import.meta.env.VITE_BACKEND_LOCAL_URL}/auth/signu`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(user),
			});
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

<form
	on:submit|preventDefault={handleSubmit}
	class="rounded-sm w-[280px] sm:w-96"
>
	<div class="space-y-6">
		<!-- <div class="flex flex-row items-center justify-center gap-2"> -->
		<label class="input input-bordered flex items-center gap-2">
			<input
				type="text"
				name="first_name"
				class="grow"
				placeholder="First Name"
				bind:value={user.first_name}
				required
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
			<button type="button" on:click={togglePasswordVisibility}>
				<img
					src={showPassword ? "eye_opened.svg" : "eye_closed.svg"}
					class="w-7"
					alt=""
				/>
				<!-- ? This (below) selects the text in the field. idky -->
				<!-- {#if showPassword}
					<Eye/>
				{:else}
					<EyeClosed/>
				{/if} -->
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
			<button type="button" on:click={toggleConfirmPasswordVisibility}>
				<img
					src={showConfirmPassword
						? "eye_opened.svg"
						: "eye_closed.svg"}
					class="w-7"
					alt=""
				/>
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
