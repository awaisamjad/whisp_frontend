<script lang="ts">
    import type { PostType } from "../../../../app";
    import type { PageData } from "./$types";
    import Post from "../../../../components/Post.svelte";
    let { data }: { data: PageData } = $props();
    const post : PostType = data.post_response.post
    console.log(post)
</script>
<!-- <article>
    <header>
        <img src="/default_avatar.webp" alt="">
        <h2>{post.username} (@{post.handle})</h2>
    </header>
    <p>{post.text_content}</p>
    {#if post.image_content}
        <img src={post.image_content} alt="Image Content" />
    {/if}
    <footer>
        <span>Comments: {post.comment_count}</span>
        <span>Retweets: {post.retweet_count}</span>
        <span>Likes: {post.like_count}</span>
        <time datetime={post.created_at}>Posted on: {new Date(post.created_at).toLocaleString()}</time>
        {#if post.updated_at}
            <time datetime={post.updated_at}>Updated on: {new Date(post.updated_at).toLocaleString()}</time>
        {/if}
    </footer>
</article> -->


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