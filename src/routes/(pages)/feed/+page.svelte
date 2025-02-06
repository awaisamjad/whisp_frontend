<script lang="ts">
    import { onMount, tick } from "svelte";
    import type { PostType } from "../../../app";
    import Post from "../../../components/Post.svelte";
    import type { PageData } from "./$types";

    let { data }: { data: PageData } = $props();
    let posts: PostType[] = $state([]);

    // let error_message = "";

    let loading = $state(true);
    let showTimeoutMessage = $state(false);
    let error_message = "";

    onMount(async () => {
        const timeout = setTimeout(() => {
            showTimeoutMessage = true;
        }, 3000);

        try {
            posts = (await data.posts) || [];
        } catch (error) {
            error_message = "Failed to load posts.";
            console.error(error);
        } finally {
            clearTimeout(timeout);
            loading = false;
            await tick();
        }
    });
</script>

{#if posts.length}
    {#each posts as post}
        <Post
            id={post.id}
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
    <div
        class="flex flex-row items-center justify-center text-6xl text-info font-bold p-2 text-center"
    >
        End of Feed
    </div>
{:else if loading}
    <div
        class="flex flex-row items-center justify-center text-6xl text-info font-bold p-2 text-center"
    >
        <span class="loading loading-spinner loading-lg"></span>
    </div>
    {#if showTimeoutMessage}
        <p
            class="flex flex-row items-center justify-center text-6xl text-warning font-bold mt-4 p-5 text-center"
        >
            Loading is taking longer than expected...
        </p>
    {/if}
{/if}
