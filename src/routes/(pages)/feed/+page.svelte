<script lang="ts">
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";
    import type { PostType } from "../../../app";
    import Post from "../../../components/Post.svelte";

    let posts: PostType[] = $state([]);
    let error_message = $state("");
    // It'd prob be best if we can give the query here to send to the backend that will execute it and grab what we want
    // Not really sure
    async function getPosts(query: string) {
        try {
            const response = await fetch("http://localhost:8000/posts", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });


            const result = await response.json();
            console.log(result.posts);
            posts = result.posts;
            if (!response.ok) {
                error_message = result.error_message || "Something went wrong";
            }
        } catch (error) {
            error_message = "Failed to connect to the server";
            console.error("Error getting posts", error);
        }
    }

    onMount(() => {
        getPosts("");
    })
    
</script>

<p>{error_message}</p>
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
