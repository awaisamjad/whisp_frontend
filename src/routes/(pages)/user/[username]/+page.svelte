<script lang="ts">
    export let data;

    function isUserAuthed(): boolean {
        if (localStorage.getItem("username") !== data.username) {
            return false;
        }
        return true;
    }
</script>

    {#if isUserAuthed()}
        <button class="btn">Create a post</button>
    {/if}
