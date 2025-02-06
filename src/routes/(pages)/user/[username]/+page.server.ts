import type { PostType } from "../../../../app.js";

export const load = async ({ fetch, params,cookies }) => {
    // ! For some reason this displays the username but also the avatar????
    const getUserPosts = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_LOCAL_URL}/user/${params.username}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${cookies.get("auth_token")}`,
                },
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            console.log(result)
            if (response.ok) {
                const posts = result.posts as PostType[];
                return posts;
            }
        } catch (error) {
            console.error("Error getting posts", error);
        }
    }

    return {
        posts: getUserPosts(),
    }
}
