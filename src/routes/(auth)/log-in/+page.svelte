<script lang="ts">
	import { goto } from "$app/navigation";
	let error_message = "";
	let username = "";
	let user = {
		email: "",
		password: "",
	};

	let showPassword = false;

	function togglePasswordVisibility() {
		showPassword = !showPassword;
	}

	async function handleSubmit(event: Event) {
		try {
			const response = await fetch("http://localhost:8000/auth/log-in", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(user),
			});

			const result = await response.json();
			console.log(result)
			localStorage.setItem("auth_token", result.token)
			localStorage.setItem("username", result.username)
			if (!response.ok) {
				error_message = result.error_message || "Something went wrong";
			} else {
				// Redirect after successful login
				goto(`/${result.username}`);
			}
		} catch (error) {
			error_message = "Failed to connect to the server";
			console.error("Error during log-in:", error);
		}
	}
</script>

<div
	class="flex flex-col justify-center items-center font-[sans-serif] min-h-screen p-4 sm:h-screen sm:w-[36rem]"
>
	<div
		class="flex flex-col bg-secondary p-6 sm:p-10 rounded-sm w-full max-w-lg"
	>
		<form on:submit|preventDefault={handleSubmit} class="w-full mt-5">
			<div class="space-y-6">
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
			<div class="mt-6 sm:mt-10">
				<button type="submit" class="btn w-full">
					<span>Log In</span>
				</button>
			</div>
			<p class="text-gray-400 text-sm mt-4 sm:mt-6 text-center">
				Dont have an account? <a
					href="/sign-up"
					class="text-slate-400 font-semibold underline hover:underline ml-1"
					>Sign Up</a
				>
			</p>
		</form>
	</div>
</div>
