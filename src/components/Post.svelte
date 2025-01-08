<script>
    export let username = "Username";
    export let handle = "@handle";
    export let time = "1h";
    export let text_content = "This is a sample tweet content.";
    export let image_content = '';
    export let avatar = "https://via.placeholder.com/50";
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
        <div class="mt-2">
            {text_content}
        </div>
        <div class="mt-1">
            <img src="{image_content}" alt="">
        </div>
    </div>
</div>
