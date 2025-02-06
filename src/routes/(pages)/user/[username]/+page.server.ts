import type { PostType } from "../../../../app.js";
import { BACKEND_LOCAL_URL } from "$env/static/private";
import Cookies from "js-cookie";

const auth_token = Cookies.get("auth_token");

export const load = async ({ fetch, params }) => {
    const getUserPosts = async () => {
        try {
            const response = await fetch(`${BACKEND_LOCAL_URL}/posts`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${auth_token}`,
                },
            });

            const result = await response.json();
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