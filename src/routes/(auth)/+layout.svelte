<script lang="ts">
    let { children } = $props();
</script>

<main class="flex flex-col items-center justify-center">
    <!-- <slot/> -->
    {@render children()}
</main>
