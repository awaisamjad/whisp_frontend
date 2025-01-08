<script lang="ts">
	import { goto } from '$app/navigation';

	let error_message = '';
	let username = '';
	let user = {
		email: '',
		password: ''
	};
	async function handleSubmit(event: Event) {
		try {
			const response = await fetch('http://localhost:8000/auth/log-in', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(user)
			});
			const result = await response.json();
			if (!response.ok) {
				error_message = result.error_message || 'Something went wrong';
			} else {
				error_message = '';
				username = result.username;
				goto(`/${username}`);
			}
		} catch (error) {
			error_message = 'Failed to connect to the server';
			console.error('Error during sign-up:', error);
		}
	}
</script>

<div class="flex flex-col justify-center items-center font-[sans-serif] sm:h-screen p-4">
	<div class="flex flex-col bg-secondary p-10 rounded-md">
		<h1 class="text-[42px] text-text mb-10">Log In</h1>
		<form on:submit|preventDefault={handleSubmit} class="w-[500px] rounded-sm">
			<div class="space-y-6">
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
						required
					/>
				</div>
				<p class="text-red-500">{error_message}</p>
			</div>
			<div class="mt-10">
				<button type="submit" class="btn">
					<span class="">Log In</span>
				</button>
			</div>
			<p class="text-gray-400 text-sm mt-6 text-center">
				Dont have an account? <a
					href="/sign-up"
					class=" text-slate-400 font-semibold underline hover:underline ml-1">Sign Up</a
				>
			</p>
		</form>
	</div>
</div>
