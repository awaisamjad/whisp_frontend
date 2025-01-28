import { console } from "inspector";
import type { PostType } from "../../../../app";

export const load = async ({ params, fetch }) => {
    let post_response: any;

    // try {
    //     const response = await fetch(`http://localhost:8000/posts/${params.post_id}`, {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //     });
    //     if (!response.ok) {
    //         throw new Error(`HTTP error! status: ${response.status}`);
    //     }
    //     post_response = await response.json();
    // } catch (error) {
    //     console.error("Failed to fetch post:", error);
    //     post_response = null;
    // }

    // return {
    //     post: post_response.post
    // }
    try {
        const response = await fetch(`http://localhost:8000/posts/${params.post_id}`, {
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