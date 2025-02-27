<script lang="ts">
    import { page } from "$app/stores";
</script>

<main class="flex flex-col gap-4 h-screen items-center justify-center p-4">
    <h1 class="font-bold text-error">{$page.status}</h1>
    <p class="">{$page.error?.message}</p>
    <button class="btn mt-4" on:click={() => window.history.back()}>Go Back</button>
    <p class="italic text-sm">Repeatedly press until back</p>
</main>
