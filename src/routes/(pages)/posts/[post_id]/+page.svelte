<script lang="ts">
    import type { PostType } from "../../../../app";
    import type { PageData } from "./$types";
    import Post from "../../../../components/Post.svelte";
    let { data }: { data: PageData } = $props();
    const post: PostType = data.post_response.post;
    console.log(post);
</script>

<button class="btn" onclick={() => window.history.back()}>Back</button>
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
