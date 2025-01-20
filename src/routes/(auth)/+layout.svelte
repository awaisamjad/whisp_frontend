<script lang="ts">
    let { children } = $props();
</script>

<main class="flex flex-col items-center justify-center h-screen">
    <!-- <slot/> -->
    {@render children()}
</main>
