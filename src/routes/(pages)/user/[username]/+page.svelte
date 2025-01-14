<script lang="ts">
    export let data;
    import { setSlots } from "$lib/layout-slots.svelte.js";
    setSlots({ main_content, left_sidebar, right_sidebar });
    function isUserAuthed(): boolean {
        if (localStorage.getItem("username") !== data.username) {
            return false;
        }
        return true;
    }
</script>

{#snippet left_sidebar()}
    Left Sidebar Home
{/snippet}

{#snippet main_content()}
    {#if isUserAuthed()}
        <button class="btn">Create a post</button>
    {/if}
{/snippet}

{#snippet right_sidebar()}
    Right Home Sidebar
{/snippet}
