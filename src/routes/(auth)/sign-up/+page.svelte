<script lang="ts">
	import { goto } from '$app/navigation';

	let error_message: string = '';
	let user = {
		first_name: '',
		last_name: '',
		username: '',
		email: '',
		password: '',
		confirm_password: ''
	};
	// setInterval(() => {
	// 	console.log(user);
	// }, 1000);
	async function handleSubmit(event: Event) {
		try {
			const response = await fetch('http://localhost:8000/auth/sign-up', {
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
				goto('/log-in');
			}
		} catch (error) {
			error_message = 'Failed to connect to the server';
			console.error('Error during sign-up:', error);
		}
	}
</script>

<div class="flex flex-col justify-center items-center font-[sans-serif] sm:h-screen p-4">
	<div class="flex flex-col bg-secondary p-10 rounded-md">
		<h1 class="text-[42px] text-text mb-10">Create an account</h1>
		<form on:submit|preventDefault={handleSubmit} class="w-[500px] rounded-sm">
			<div class="space-y-6">
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
			</div>
			<div class="mt-10">
				<button type="submit" class="btn">
					<span class="">Create account</span>
				</button>
			</div>
			<p class="text-gray-400 text-sm mt-6 text-center">
				Already have an account? <a
					href="/log-in"
					class=" text-slate-400 font-semibold underline hover:underline ml-1">Login</a
				>
			</p>
		</form>
	</div>
</div>
