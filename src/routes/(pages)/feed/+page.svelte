<script>
	import { goto } from "$app/navigation";

	import Post from "../../../components/Post.svelte";
	let posts = [
		{
			id: "post1",
			username: "awais",
			handle: "@awaisamjad",
			time: "2h",
			content:
				"This is a sample post content. It is meant to demonstrate how a longer post might look in the feed. The content can span multiple sentences and include various details about the topic being discussed. This helps to ensure that the layout and design of the post component can handle longer text without any issues. Additionally, it provides a more realistic example of what users might see in their feed, making the application feel more complete and polished.",
			image_content: "https://i.pravatar.cc/40?img=1",
			avatar: "https://i.pravatar.cc/40?img=1",
		},
		{
			id: "post2",
			username: "john",
			handle: "@john_doe",
			time: "3h",
			content: "Another example of a post content.",
			image_content: "https://i.pravatar.cc/40?img=1",
			avatar: "https://i.pravatar.cc/40?img=2",
		},
		{
			id: "post3",
			username: "jane",
			handle: "@jane_doe",
			time: "5h",
			content: "Yet another post content example.",
			image_content: "https://i.pravatar.cc/40?img=1",
			avatar: "https://i.pravatar.cc/40?img=3",
		},
		{
			id: "post4",
			username: "awais",
			handle: "@awaisamjad",
			time: "2h",
			content:
				"This is a sample post content. It is meant to demonstrate how a longer post might look in the feed. The content can span multiple sentences and include various details about the topic being discussed. This helps to ensure that the layout and design of the post component can handle longer text without any issues. Additionally, it provides a more realistic example of what users might see in their feed, making the application feel more complete and polished.",
			image_content: "https://i.pravatar.cc/40?img=1",
			avatar: "https://i.pravatar.cc/40?img=1",
		},
		{
			id: "post5",
			username: "john",
			handle: "@john_doe",
			time: "3h",
			content: "Another example of a post content.",
			image_content: "https://i.pravatar.cc/40?img=1",
			avatar: "https://i.pravatar.cc/40?img=2",
		},
		{
			id: "post6",
			username: "jane",
			handle: "@jane_doe",
			time: "5h",
			content: "Yet another post content example.",
			image_content: "https://i.pravatar.cc/40?img=1",
			avatar: "https://i.pravatar.cc/40?img=3",
		},
		{
			id: "post7",
			username: "awais",
			handle: "@awaisamjad",
			time: "2h",
			content:
				"This is a sample post content. It is meant to demonstrate how a longer post might look in the feed. The content can span multiple sentences and include various details about the topic being discussed. This helps to ensure that the layout and design of the post component can handle longer text without any issues. Additionally, it provides a more realistic example of what users might see in their feed, making the application feel more complete and polished.",
			image_content: "https://i.pravatar.cc/40?img=1",
			avatar: "https://i.pravatar.cc/40?img=1",
		},
	];
</script>

{#each posts as post}
	<Post
		id="feed/{post.id}"
		username={post.username}
		handle={post.handle}
		time={post.time}
		text_content={post.content}
		image_content={post.image_content}
		avatar={post.avatar}
	/>
{/each}
