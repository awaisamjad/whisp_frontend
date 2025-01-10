<script lang="ts">
	import { goto } from "$app/navigation";

	let error_message: string = "";
	let user = {
		first_name: "",
		last_name: "",
		username: "",
		email: "",
		password: "",
		confirm_password: "",
	};

	let showPassword = false;

	function togglePasswordVisibility() {
		showPassword = !showPassword;
	}

	async function handleSubmit(event: Event) {
		try {
			const response = await fetch("http://localhost:8000/auth/sign-up", {
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
				goto("/log-in");
			}
		} catch (error) {
			error_message = "Failed to connect to the server";
			console.error("Error during sign-up:", error);
		}
	}
</script>

<div
	class="flex flex-col justify-center items-center font-[sans-serif] min-h-screen p-4 sm:h-screen"
>
	<div
		class="flex flex-col bg-secondary p-6 sm:p-10 rounded-md w-full max-w-lg"
	>
		<form on:submit|preventDefault={handleSubmit} class="w-full rounded-sm">
			<!-- <div class="space-y-6">
				<div class="flex flex-row items-center field justify-center gap-2">
					<input
						name="first_name"
						type="text"
						class="input"
						placeholder="First Name"
						bind:value={user.first_name}
						required
					/>
					<input
						name="last_name"
						type="text"
						class="input"
						placeholder="Last Name"
						bind:value={user.last_name}
						required
					/>
				</div>
				<div>
					<input
						name="username"
						type="text"
						class="input"
						placeholder="Username"
						bind:value={user.username}
						required
					/>
				</div>
				<div class="field">
					<input
						type="email"
						class="input variant-plain sz-md"
						placeholder="Email"
						bind:value={user.email}
						required
					/>
				</div>
				<div>
					<input
						name="password"
						type="password"
						class="input"
						placeholder="Password"
						bind:value={user.password}
					/>
				</div>
				<div>
					<input
						name="confirm_password"
						type="password"
						class="input"
						placeholder="Confirm Password"
						bind:value={user.confirm_password}
						required
					/>
				</div>
				<p class="text-red-500">{error_message}</p>
			</div> -->
			<div class="space-y-6">
				<div class="flex flex-row items-center justify-center gap-2">
					<label class="input input-bordered flex items-center gap-2 w-1/2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							fill="currentColor"
							class="h-4 w-4 opacity-70"
						>
							<path
								d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"
							/>
						</svg>
						<input
							type="text"
							name="first_name"
							class="grow"
							placeholder="First Name"
							bind:value={user.first_name}
							required
						/>
					</label>

					<label class="input input-bordered flex items-center gap-2 w-1/2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							fill="currentColor"
							class="h-4 w-4 opacity-70"
						>
							<path
								d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"
							/>
						</svg>
						<input
							type="text"
							name="last_name"
							class="grow"
							placeholder="Last Name"
							bind:value={user.last_name}
							required
						/>
					</label>
				</div>

				<label class="input input-bordered flex items-center gap-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 16 16"
						fill="currentColor"
						class="h-4 w-4 opacity-70"
					>
						<path
							d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"
						/>
					</svg>
					<input
						type="text"
						name="username"
						class="grow"
						placeholder="Username"
						bind:value={user.username}
						required
					/>
				</label>

				<label class="input input-bordered flex items-center gap-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 16 16"
						fill="currentColor"
						class="h-4 w-4 opacity-70"
					>
						<path
							d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
						/>
						<path
							d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
						/>
					</svg>
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
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 16 16"
						fill="currentColor"
						class="h-4 w-4 opacity-70"
					>
						<path
							fill-rule="evenodd"
							d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
							clip-rule="evenodd"
						/>
					</svg>
					<input
						type={showPassword ? "text" : "password"}
						class="grow"
						placeholder="Password"
						bind:value={user.password}
						required
					/>
					<button type="button" on:click={togglePasswordVisibility}>
						{showPassword ? "Hide" : "Show"}
					</button>
				</label>
				<p class="text-red-500">{error_message}</p>
			</div>
			<div class="mt-10">
				<button type="submit" class="btn w-full">
					<span class="">Create account</span>
				</button>
			</div>
			<p class="text-primary-content text-sm mt-6 text-center">
				Already have an account? <a
					href="/log-in"
					class="font-semibold underline hover:underline ml-1"
					>Login</a
				>
			</p>
		</form>
	</div>
</div>
