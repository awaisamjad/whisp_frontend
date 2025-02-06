<script lang="ts">
    import { goto } from "$app/navigation";
    import { Repeat2, Heart, MessageSquare, EllipsisVertical } from "lucide-svelte";
    import type { PostType } from "../app";

    let post: PostType = $props();

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
</script>

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
            <img
                class="avatar w-10 h-10 rounded-full mr-4"
                src="/{post.avatar}"
                alt={post.username}
                on:click|stopPropagation={() => goto(`/user/${post.username}`)}
                style="cursor: pointer;"
            />
            <span class="username font-bold mr-2">{post.username}</span>
            <span class="time text-gray-500">{post.updated_at}</span>
        </div>

        <div id="content" on:click={() => goto(`/posts/${post.id}`)}>
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
        <button
            class="flex gap-2 p-1 rounded-md outline-1 items-center justify-center hover:bg-base-300"
            on:click|preventDefault
        >
            <MessageSquare size={20} />
            <p class=" text-lg">{post.comment_count}</p>
        </button>
        <button
            class="flex gap-2 p-1 rounded-md outline-1 items-center justify-center hover:bg-base-300"
            on:click|preventDefault={() => toggleRetweet()}
        >
            <Repeat2
                size={20}
                color={retweeted ? selected_colour : deselected_colour}
            />
            <p class=" text-lg">{post.retweet_count}</p>
        </button>
        <button
            class="flex gap-2 p-1 rounded-md outline-1 items-center justify-center hover:bg-base-300"
            on:click|preventDefault={() => toggleLike()}
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
                on:click|preventDefault
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
