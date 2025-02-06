import type { PostType } from "../../../../app";
export const load = async ({ params, fetch, cookies }) => {
    const getPost = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_LOCAL_URL}/posts/${params.post_id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${cookies.get("auth_token")}`,

                },
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            let post = await response.json();
            if (response.ok) {
                post = post.post as PostType;
                return post;
            }
        } catch (error) {
            console.error("Failed to fetch post:", error);
        }
    }
    return {
        post: getPost(),
    };
};