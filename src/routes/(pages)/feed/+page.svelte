<script>
	import { goto } from "$app/navigation";
	import { setSlots } from "$lib/layout-slots.svelte.js";
	setSlots({ main_content, left_sidebar, right_sidebar });

	import Post from "../../../components/Post.svelte";
	let posts = [
		{
			username: "awais",
			handle: "@awaisamjad",
			time: "2h",
			content:
				"This is a sample post content. It is meant to demonstrate how a longer post might look in the feed. The content can span multiple sentences and include various details about the topic being discussed. This helps to ensure that the layout and design of the post component can handle longer text without any issues. Additionally, it provides a more realistic example of what users might see in their feed, making the application feel more complete and polished.",
			image_content: "https://i.pravatar.cc/40?img=1",
			avatar: "https://i.pravatar.cc/40?img=1",
		},
		{
			username: "john",
			handle: "@john_doe",
			time: "3h",
			content: "Another example of a post content.",
			image_content: "https://i.pravatar.cc/40?img=1",
			avatar: "https://i.pravatar.cc/40?img=2",
		},
		{
			username: "jane",
			handle: "@jane_doe",
			time: "5h",
			content: "Yet another post content example.",
			image_content: "https://i.pravatar.cc/40?img=1",
			avatar: "https://i.pravatar.cc/40?img=3",
		},
		{
			username: "awais",
			handle: "@awaisamjad",
			time: "2h",
			content:
				"This is a sample post content. It is meant to demonstrate how a longer post might look in the feed. The content can span multiple sentences and include various details about the topic being discussed. This helps to ensure that the layout and design of the post component can handle longer text without any issues. Additionally, it provides a more realistic example of what users might see in their feed, making the application feel more complete and polished.",
			image_content: "https://i.pravatar.cc/40?img=1",
			avatar: "https://i.pravatar.cc/40?img=1",
		},
		{
			username: "john",
			handle: "@john_doe",
			time: "3h",
			content: "Another example of a post content.",
			image_content: "https://i.pravatar.cc/40?img=1",
			avatar: "https://i.pravatar.cc/40?img=2",
		},
		{
			username: "jane",
			handle: "@jane_doe",
			time: "5h",
			content: "Yet another post content example.",
			image_content: "https://i.pravatar.cc/40?img=1",
			avatar: "https://i.pravatar.cc/40?img=3",
		},
		{
			username: "awais",
			handle: "@awaisamjad",
			time: "2h",
			content:
				"This is a sample post content. It is meant to demonstrate how a longer post might look in the feed. The content can span multiple sentences and include various details about the topic being discussed. This helps to ensure that the layout and design of the post component can handle longer text without any issues. Additionally, it provides a more realistic example of what users might see in their feed, making the application feel more complete and polished.",
			image_content: "https://i.pravatar.cc/40?img=1",
			avatar: "https://i.pravatar.cc/40?img=1",
		},
		{
			username: "john",
			handle: "@john_doe",
			time: "3h",
			content: "Another example of a post content.",
			image_content: "https://i.pravatar.cc/40?img=1",
			avatar: "https://i.pravatar.cc/40?img=2",
		},
		{
			username: "jane",
			handle: "@jane_doe",
			time: "5h",
			content: "Yet another post content example.",
			image_content: "https://i.pravatar.cc/40?img=1",
			avatar: "https://i.pravatar.cc/40?img=3",
		},
	];
</script>

{#snippet left_sidebar()}
	<div class="outline h-full flex flex-col items-center justify-center gap-1">
		<a
			href="/feed"
			class=" hover:bg-slate-600 w-full h-16 flex items-center justify-center text-xl rounded text"
			>Hello</a
		>
		<a
			href="/feed"
			class=" hover:bg-slate-600 w-full h-16 flex items-center justify-center text-xl rounded text"
			>Hello</a
		>
		<a
			href="/feed"
			class=" hover:bg-slate-600 w-full h-16 flex items-center justify-center text-xl rounded text"
			>Hello</a
		>
		<a
			href="/feed"
			class=" hover:bg-slate-600 w-full h-16 flex items-center justify-center text-xl rounded text"
			>Hello</a
		>
		<a
			href="/feed"
			class=" hover:bg-slate-600 w-full h-16 flex items-center justify-center text-xl rounded text"
			>Hello</a
		>
		
	</div>
{/snippet}

{#snippet main_content()}
	{#each posts as post}
		<Post
			username={post.username}
			handle={post.handle}
			time={post.time}
			text_content={post.content}
			image_content={post.image_content}
			avatar={post.avatar}
		/>
	{/each}
{/snippet}

{#snippet right_sidebar()}{/snippet}
