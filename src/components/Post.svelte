<script lang="ts">
    let {
        username = "",
        handle = "@handle",
        time = "1h",
        text_content = "Text Content",
        image_content = "favicon.png",
        avatar = "https://via.placeholder.com/50",
        number_of_comments = 0,
        number_of_retweets = 0,
        number_of_likes = 0,
    } = $props();

    let liked = $state(false);
    let toggleLike = () => {
        liked = !liked;
    };

    let retweeted = $state(false);
    let toggleRetweet = () => {
        retweeted = !retweeted;
    };
</script>

<a
    href="/"
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
            <!-- <enhanced:img src="/static/{image_content}" alt="" /> -->
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
</a>
