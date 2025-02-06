import type { PostType } from "../../../app";
import { BACKEND_LOCAL_URL } from "$env/static/private";
import Cookies from "js-cookie";

const auth_token = Cookies.get("auth_token");

export const load = async ({ fetch }) => {
    const getFeed = async () => {
        try {
            const response = await fetch(`${BACKEND_LOCAL_URL}/posts`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${auth_token}`,
                },
            });
            console.log("response:", response);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();

            console.log("isAuthenticated:", result.isAuthenticated);

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