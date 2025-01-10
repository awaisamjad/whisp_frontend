<script lang="ts">
    import type { PageData } from "../settings copy/$types";

    let { data }: { data: PageData } = $props();

    import { setSlots } from '$lib/layout-slots.svelte.js';
	setSlots({ main_content, left_sidebar, right_sidebar });

</script>


{#snippet left_sidebar()}
	Left Sidebar Home
{/snippet}

{#snippet main_content()}
	Main Content
{/snippet}

{#snippet right_sidebar()}
	Right Home Sidebar
{/snippet}