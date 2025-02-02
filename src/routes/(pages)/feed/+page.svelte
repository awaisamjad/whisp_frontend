<script lang="ts">
    import { onMount } from "svelte";
    import type { PostType } from "../../../app";
    import Post from "../../../components/Post.svelte";
    import type { PageData } from "./$types";
    import Cookies from "js-cookie";
    
    let { data }: { data: PageData } = $props();
    let posts: PostType[] = $state([]);

    let error_message = "";
    console.log(Cookies.get("user_id"));
    onMount(async () => {
        try {
            posts = (await data.posts) || [];
        } catch (error) {
            error_message = "Failed to load posts.";
            console.error(error);
        }
    });
</script>
{#if posts.length}
    {#each posts as post}
        <Post
            id={post.id}
            user_id={post.user_id}
            username={post.username}
            handle={post.handle}
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
{:else}
    <p
        class="flex flex-row items-center justify-center text-6xl text-error font-bold mt-4 p-5 text-center"
    >
        No posts available at the moment. Please try again later.
    </p>
{/if}
