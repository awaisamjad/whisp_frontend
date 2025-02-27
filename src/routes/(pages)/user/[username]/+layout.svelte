<script lang="ts">
    import { page } from '$app/stores';
    import { get } from 'svelte/store';
    import type { Snippet } from "svelte";
    import type { LayoutData } from "./$types";

    let { data, children }: { data: LayoutData; children: Snippet } = $props();

    let activeTab = 'posts';

    function displayTab(tab: string) {
        activeTab = tab;
    }

    // Get the current URL and username
    const currentPage = get(page);
    const username = currentPage.params.username;
</script>

<div class="grid grid-rows-[2fr_3fr] max-h-96">
    <img
        src="/mountain.jpg"
        alt=""
        class="h-full w-full object-cover row-span-1"
    />
    <div class="row-span-1 grid grid-rows-[2fr_1fr]">
        <h1 class="row-span-1">{username}</h1>
        <!-- name of each tab group should be unique -->
        <div role="tablist" class="tabs tabs-lift row-span-1">
            <a
                href={`/user/${username}/posts`}
                role="tab"
                class="tab w-1/3 {activeTab === 'posts' ? 'tab-active' : ''}"
                onclick={() => displayTab('posts')}
            >
                Posts
            </a>
            <a
                href={`/user/${username}/media`}
                role="tab"
                class="tab w-1/3 {activeTab === 'media' ? 'tab-active' : ''}"
                onclick={() => displayTab('media')}
            >
                Media
            </a>
            <a
                href={`/user/${username}/likes`}
                role="tab"
                class="tab w-1/3 {activeTab === 'likes' ? 'tab-active' : ''}"
                onclick={() => displayTab('likes')}
            >
                Likes
            </a>
        </div>
    </div>
</div>

{@render children()}