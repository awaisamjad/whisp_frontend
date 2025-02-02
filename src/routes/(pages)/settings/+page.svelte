<script lang="ts">
	import { signOut } from "../../../utils.svelte";
	import type { PageData } from "./$types";
	let { data }: { data: PageData } = $props();
</script>

<ul>
	<li>Change theme</li>
	<li>Change Language</li>
	<li>Make profile public or private</li>
	<li>
		<button
			class="btn btn-accent sm:w-32 md:w-40 lg:w-48 xl:w-64 mx-4"
			onclick={() => signOut()}>Sign Out</button
		>
	</li>
</ul>
