<script lang="ts">
    import { onMount } from "svelte";
    import type { PostType } from "../../../app";
    import Post from "../../../components/Post.svelte";
    import { browser } from "$app/environment";
    import { isUserLoggedIn } from "../../../utils.svelte";
    let posts: PostType[] = $state([]);
    let error_message = $state("");
    import Cookies from "js-cookie";

    function getCookie(name: any) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop()?.split(";").shift();
        return null; // Return null if the cookie does not exist
    }

    let auth_token: any;
    if (browser) {
        auth_token = getCookie("auth_token");
    }
    /**
     *
     * @param query - A query that can be used in the dB
     */
    async function getPosts(query: string) {
        try {
            const response = await fetch("http://localhost:8000/posts", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${auth_token}`,
                },
            });

            const result = await response.json();

            console.log("isAuthenticated:", result.isAuthenticated);
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
    });
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
