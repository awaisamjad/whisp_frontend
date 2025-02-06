<script lang="ts">
    import type { PostType } from "../../../../app";
    import type { PageData } from "./$types";
    import {
        MessageSquare,
        Repeat2,
        Heart,
        EllipsisVertical,
        ArrowLeft,
    } from "lucide-svelte";
    import Comment from "../../../../components/Comment.svelte";

    let { data }: { data: PageData } = $props();

    const deselected_colour = "#ffffff";
    const selected_colour = "#99c1f1";

    let liked = $state(false);
    let toggleLike = () => {
        liked = !liked;
    };

    let retweeted = $state(false);
    let toggleRetweet = () => {
        retweeted = !retweeted;
    };

    let comments = [
        {
            id: 1,
            user_id: 1,
            username: "user1",
            handle: "@user1",
            text_content: "This is a comment",
            image_content: "",
            avatar: "default_avatar.webp",
            comment_count: 0,
            retweet_count: 0,
            like_count: 0,
            created_at: "2023-10-01T12:00:00Z",
            updated_at: "2023-10-01T12:00:00Z",
        },
        {
            id: 2,
            user_id: 2,
            username: "user2",
            handle: "@user2",
            text_content: "This is another comment",
            image_content: "",
            avatar: "/default_avatar.webp",
            comment_count: 0,
            retweet_count: 0,
            like_count: 0,
            created_at: "2023-10-02T12:00:00Z",
            updated_at: "2023-10-02T12:00:00Z",
        },
    ];
</script>

<button class="p-3 hover:bg-base-300" onclick={() => window.history.back()}>
    <ArrowLeft />
</button>
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore event_directive_deprecated -->

{#await data.post then post}
    <div
        class="post-container grid grid-rows-[9fr_1fr] p-2 outline m-2 rounded outline-info"
    >
        <div class="grid grid-rows-[auto_1fr]">
            <div
                class="post-header flex items-center mb-2 bg-base-200 p-2 rounded-sm"
            >
                <a href="/user/{post.username}">
                    <img
                        class="avatar w-10 h-10 rounded-full mr-4"
                        src="/{post.avatar}"
                        alt={post.username}
                    />
                </a>
                <span class="username font-bold mr-2">{post.username}</span>
                <span class="time text-gray-500">{post.updated_at}</span>
            </div>

            <div id="content">
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

        <div
            id="bottom-bar"
            class="bg-base-200 flex items-center justify-evenly"
        >
            <button
                class="flex gap-2 p-1 rounded-md outline-1 items-center justify-center hover:bg-base-300"
            >
                <MessageSquare size={20} />
                <p class=" text-lg">{post.comment_count}</p>
            </button>
            <button
                class="flex gap-2 p-1 rounded-md outline-1 items-center justify-center hover:bg-base-300"
                onclick={() => toggleRetweet()}
            >
                <Repeat2
                    size={20}
                    color={retweeted ? selected_colour : deselected_colour}
                />
                <p class=" text-lg">{post.retweet_count}</p>
            </button>
            <button
                class="flex gap-2 p-1 rounded-md outline-1 items-center justify-center hover:bg-base-300"
                onclick={() => toggleLike()}
            >
                <Heart
                    size={20}
                    color={liked ? selected_colour : deselected_colour}
                />

                <p class=" text-lg">{post.like_count}</p>
            </button>
            <div class="dropdown dropdown-end">
                <!-- svelte-ignore a11y_interactive_supports_focus -->
                <div
                    tabIndex={0}
                    role="button"
                    class="flex gap-2 p-1 rounded-md outline-1 items-center justify-center hover:bg-base-300"
                >
                    <EllipsisVertical size={20} />
                </div>
                <ul
                    tabIndex={0}
                    class="dropdown-content menu bg-base-100 rounded-box z-[1] p-2 shadow outline"
                >
                    <li><button>Report</button></li>
                    <li><button>Bookmark</button></li>
                    <li><button>Share</button></li>
                    <li><button>DM</button></li>
                </ul>
            </div>
        </div>
    </div>
{/await}

<!-- TODO Comments below -->
<div class="flex flex-row flex-wrap items-center justify-evenly">
    {#each comments as comment}
        <Comment
            id={comment.id}
            user_id={comment.user_id}
            username={comment.username}
            text_content={comment.text_content}
            image_content={comment.image_content}
            avatar={comment.avatar}
            comment_count={comment.comment_count}
            retweet_count={comment.retweet_count}
            like_count={comment.like_count}
            created_at={comment.created_at}
            updated_at={comment.updated_at}
        />
    {/each}
</div>
