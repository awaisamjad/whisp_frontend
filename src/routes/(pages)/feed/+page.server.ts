import type { PostType } from "../../../app";

export const load = async ({ fetch, cookies }) => {
    const auth_token = cookies.get("auth_token") || "";
    const getFeed = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_LOCAL_URL}/feed`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${auth_token}`,
                },
            });
            console.log("response:", response);
            console.log("headers:", response.headers);
            const result = await response.json();
            console.log("result:", result.message);
            if (response.ok) {
                const posts = result.posts as PostType[];
                return posts;
            }
        } catch (error) {
            console.error("Error getting posts", error);
        }
    }

    return {
        posts: getFeed(),
    }
}