<script lang="ts">
    import { goto } from "$app/navigation";
    import type { PostType } from "../app";

    // let {
    //     id = "",
    //     username = "",
    //     handle = "@handle",
    //     time = "1h",
    //     text_content = "Text Content",
    //     image_content = "favicon.png",
    //     avatar = "https://via.placeholder.com/50",
    //     number_of_comments = 0,
    //     number_of_retweets = 0,
    //     number_of_likes = 0,
    // } = $props();

    let post: PostType = $props();

    let liked = $state(false);
    let toggleLike = () => {
        liked = !liked;
    };

    let retweeted = $state(false);
    let toggleRetweet = () => {
        retweeted = !retweeted;
    };
</script>
<!-- <a
    href="/{id}"
    class="border-t-2 border-gray-300 p-4 flex items-start hover:bg-base-300"
>
    <div class="mr-4">
        <img class="rounded-full" src={avatar} alt="avatar" />
    </div>
    <div class="flex-1">
        <div class="flex items-center">
            <span class="font-bold mr-2">{username}</span>
            <span class="text-gray-600 mr-2">{handle}</span>
            <span class="text-gray-600">{time}</span>
        </div>
        <div class="mt-3">
            {text_content}
        </div>
        <div class="mt-3">
            <img src={image_content} alt="" />
        </div>
        <div class="flex flex-row gap-2 mt-3 justify-evenly">
            <button class="btn btn-secondary btn-xs" on:click|preventDefault>
                <img src="" alt="" class="w-5" />
                <p>{number_of_comments}</p>
            </button>
            <button
                class="btn btn-secondary btn-xs"
                on:click|preventDefault={() => toggleRetweet()}
            >
                <img
                    src={retweeted
                        ? "retweet_clicked.svg"
                        : "retweet_not_clicked.svg"}
                    alt=""
                    class="w-5"
                />
                <p>{number_of_retweets}</p>
            </button>
            <button
                class="btn btn-secondary btn-xs"
                on:click|preventDefault={() => toggleLike()}
            >
                <img
                    src={liked ? "heart_clicked.svg" : "heart_not_clicked.svg"}
                    alt=""
                    class="w-5"
                />
                <p>{number_of_likes}</p>
            </button>
            <div class="dropdown">
                <div
                    tabIndex={0}
                    role="button"
                    class="btn m-1 btn-secondary btn-xs"
                    on:click|preventDefault
                >
                    ...
                </div>
                <ul
                    tabIndex={0}
                    class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow outline"
                >
                    <li><button>Report</button></li>
                    <li><button>Delete</button></li>
                </ul>
            </div>
        </div>
    </div>
</a> -->

<!-- <a
		href="feed/{post.id}"
		class="border-t-2 border-gray-300 p-4 flex hover:bg-base-300"
	>
		<img
			class="avatar w-10 h-10 rounded-full mr-4"
			src={post.avatar}
			alt={post.username}
		/>
		<div class="post-content flex-1">
			<div class="post-header flex items-center mb-2">
				<span class="username font-bold mr-2">{post.username}</span>
				<span class="handle mr-2 text-accent">{post.handle}</span>
				<span class="time text-gray-500">{post.updated_at}</span>
			</div>
			<div class="text-content mb-2">{post.text_content}</div>
			{#if post.image_content}
				<img
					class="image-content max-w-full rounded-lg"
					src={post.image_content}
					alt="Post"
				/>
			{/if}
		</div>

	</a> -->


<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore event_directive_deprecated -->
<div
    class="post-container grid grid-rows-[9fr_1fr] p-2 border-t-2 hover:bg-base-300"
    
>
    <div class="grid grid-rows-[auto_1fr]">
        <div
            class="post-header flex items-center mb-2 bg-base-200 p-2 rounded-sm"
        >
            <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
            <!-- svelte-ignore event_directive_deprecated -->
            <img
                class="avatar w-10 h-10 rounded-full mr-4"
                src={post.avatar}
                alt={post.username}
                on:click|stopPropagation={() => goto(`account/${post.username}`)}
                style="cursor: pointer;"
            />
            <span class="username font-bold mr-2">{post.username}</span>
            <span class="handle mr-2 text-accent">{post.handle}</span>
            <span class="time text-gray-500">{post.updated_at}</span>
        </div>

        <div id="content" on:click={() => goto(`feed/${post.id}`)}>
            {post.text_content}
            {#if post.image_content}
                <img
                    class="image-content max-w-full rounded-lg"
                    src={post.image_content}
                    alt="Post"
                />
            {/if}
        </div>
    </div>

    <div id="bottom-bar" class="bg-base-200 flex items-center justify-evenly">
        <button class="btn btn-secondary btn-xs" on:click|preventDefault>
            <img src="" alt="" class="w-5" />
            <p>{post.comment_count}</p>
        </button>
        <button
            class="btn btn-secondary btn-xs"
            on:click|preventDefault={() => toggleRetweet()}
        >
            <img
                src={retweeted
                    ? "retweet_clicked.svg"
                    : "retweet_not_clicked.svg"}
                alt=""
                class="w-5"
            />
            <p>{post.retweet_count}</p>
        </button>
        <button
            class="btn btn-secondary btn-xs"
            on:click|preventDefault={() => toggleLike()}
        >
            <img
                src={liked ? "heart_clicked.svg" : "heart_not_clicked.svg"}
                alt=""
                class="w-5"
            />
            <p>{post.like_num}</p>
        </button>
        <div class="dropdown">
            <!-- svelte-ignore a11y_interactive_supports_focus -->
            <div
                tabIndex={0}
                role="button"
                class="btn m-1 btn-secondary btn-xs"
                on:click|preventDefault
            >
                ...
            </div>
            <ul
                tabIndex={0}
                class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow outline"
            >
                <li><button>Report</button></li>
                <li><button>Delete</button></li>
            </ul>
        </div>
    </div>
</div>
