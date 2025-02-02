import { console } from "inspector";
import { BACKEND_LOCAL_URL } from "$env/static/private";
export const load = async ({ params, fetch }) => {
    let post_response: any;

    try {
        const response = await fetch(`${BACKEND_LOCAL_URL}/posts/${params.post_id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log(response);
        post_response = await response.json();
    } catch (error) {
        console.error("Failed to fetch post:", error);
        post_response = null;
    }
    console.log(post_response);
    return {
        post_response: post_response
    };
};