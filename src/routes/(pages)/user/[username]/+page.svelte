<script lang="ts">
    import type { PageData } from "./$types";
    import Post from "../../../../components/Post.svelte";

    let { data }: { data: PageData } = $props();

</script>
<div class="">
    <h1>Username</h1>
</div>

{#await data.posts then posts}
    {#if posts}
        {#each posts as post}
        <Post
            id={post.id }
            user_id={post.user_id}
            username={post.username}
            text_content={post.text_content}
            image_content={post.image_content}
            avatar={post.avatar}
            comment_count={post.comment_count}
            retweet_count={post.retweet_count}
            like_count={post.like_count}
            created_at={post.created_at}
            updated_at={post.updated_at}
        />
    {/each}
    {:else}
        Create a Post
    {/if}
{/await}
