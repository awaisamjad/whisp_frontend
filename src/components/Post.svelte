<script lang="ts">
    let {
        username = "",
        handle = "@handle",
        time = "1h",
        text_content = "Text Content",
        image_content = "favicon.png",
        avatar = "https://via.placeholder.com/50",
    } = $props();
</script>

<div class="border border-gray-300 p-4 flex items-start">
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
            <!-- <enhanced:img src="/static/{image_content}" alt="" /> -->
            <img src="{image_content}" alt="" />
        </div>
    </div>
</div>
