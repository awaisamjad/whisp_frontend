// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

export type PostType = {
	id: number;
	user_id: number;
	username: string;
	handle: string;
	avatar: string;
	text_content: string;
	image_content?: string; // Could be extended to an array for multiple images
	tags?: string[];       // Tags for the post
	comment_count: number; // Count of comments
	retweet_count: number; // Count of retweets
	like_count: number;
	created_at: string;
	updated_at: string;
};

// ! IS there a datetime, image type

export type UserType = {
	id: number;
	username: string;
	first_name: string;
	last_name: string;
	email: string;
	password: string;
	avatar: string;
	posts: PostType[];
	feed: PostType[];
	following: number[]; //This is a list of user ids
	followers: number[]; //This is a list of user ids
	bio: string;
	created_at: string;
	updated_at: string;
}

export type SignUpRequest = {
	first_name: string;
	last_name: string;
	username: string;
	email: string;
	password: string;
	confirm_password: string;
}

interface LogInRequest {
	email: string;
	password: string;
}

export interface CreatePostRequest {
	content: string;
	user_id: string;
}

interface ErrorResponse {
	errorMessage: string;
}

interface SuccessResponse {
	data: string;
	message: string;
}


export { };
