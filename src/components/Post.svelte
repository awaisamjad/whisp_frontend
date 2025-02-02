<script lang="ts">
    import { goto } from "$app/navigation";
    import type { PostType } from "../app";

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
            <span class="handle mr-2 text-accent">{post.handle}</span>
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
                    ? "/retweet_clicked.svg"
                    : "/retweet_not_clicked.svg"}
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
                src={liked ? "/heart_clicked.svg" : "/heart_not_clicked.svg"}
                alt=""
                class="w-5"
            />
            <p>{post.like_count}</p>
        </button>
        <div class="dropdown dropdown-end">
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
