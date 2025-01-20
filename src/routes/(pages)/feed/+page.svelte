<script lang="ts">
	import type { PostType } from "../../../app";
	import Post from "../../../components/Post.svelte";
	let posts: PostType[] = [
		{
            id: 1,
            username: "awais",
            handle: "@awaisamjad",
            text_content: "This is a sample post content. It is meant to demonstrate how a longer post might look in the feed. The content can span multiple sentences and include various details about the topic being discussed. This helps to ensure that the layout and design of the post component can handle longer text without any issues. Additionally, it provides a more realistic example of what users might see in their feed, making the application feel more complete and polished.",
            image_content: "https://i.pravatar.cc/40?img=1",
            avatar: "https://i.pravatar.cc/40?img=1",
            comment_count: 0,
            like_num: 0,
            dislike_num: 0,
            created_at: "",
            updated_at: "",
            retweet_count: 0
        },
		{
            id: 2,
            username: "john_doe",
            handle: "@johndoe",
            text_content: "Just another day in paradise!",
            image_content: "https://i.pravatar.cc/40?img=2",
            avatar: "https://i.pravatar.cc/40?img=2",
            comment_count: 5,
            like_num: 10,
            dislike_num: 1,
            created_at: "",
            updated_at: "",
            retweet_count: 0
        },
		{
            id: 3,
            username: "jane_smith",
            handle: "@janesmith",
            text_content: "Loving the new features in this app!",
            image_content: "https://i.pravatar.cc/40?img=3",
            avatar: "https://i.pravatar.cc/40?img=3",
            comment_count: 2,
            like_num: 15,
            dislike_num: 0,
            created_at: "",
            updated_at: "",
            retweet_count: 0
        },
		{
            id: 1,
            username: "awais",
            handle: "@awaisamjad",
            text_content: "This is a sample post content. It is meant to demonstrate how a longer post might look in the feed. The content can span multiple sentences and include various details about the topic being discussed. This helps to ensure that the layout and design of the post component can handle longer text without any issues. Additionally, it provides a more realistic example of what users might see in their feed, making the application feel more complete and polished.",
            image_content: "https://i.pravatar.cc/40?img=1",
            avatar: "https://i.pravatar.cc/40?img=1",
            comment_count: 0,
            like_num: 0,
            dislike_num: 0,
            created_at: "",
            updated_at: "",
            retweet_count: 0
        },
		{
            id: 2,
            username: "john_doe",
            handle: "@johndoe",
            text_content: "Just another day in paradise!",
            image_content: "default_avatar.webp",
            avatar: "default_avatar.webp",
            comment_count: 5,
            like_num: 10,
            dislike_num: 1,
            created_at: "",
            updated_at: "",
            retweet_count: 0
        },
		{
            id: 3,
            username: "jane_smith",
            handle: "@janesmith",
            text_content: "Loving the new features in this app!",
            image_content: "https://i.pravatar.cc/40?img=3",
            avatar: "https://i.pravatar.cc/40?img=3",
            comment_count: 2,
            like_num: 15,
            dislike_num: 0,
            created_at: "",
            updated_at: "",
            retweet_count: 0
        },
	];
</script>

{#each posts as post}

	<Post
		id={post.id}
		username={post.username}
		handle={post.handle}
		text_content={post.text_content}
		image_content={post.image_content}
		avatar={post.avatar}
		comment_count={post.comment_count}
		like_num={post.like_num}
		dislike_num={post.dislike_num}
		created_at={post.created_at}
		updated_at={post.updated_at}
	/>
{/each}
