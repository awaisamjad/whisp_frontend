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
	username: string;
	handle: string;
	avatar: string;
	title?: string; // Optional title for the post
	text_content: string;
	image_content: string; // Could be extended to an array for multiple images
	media_url?: string;    // Video or additional media URL
	tags?: string[];       // Tags for the post
	comment_count: number; // Count of comments
	retweet_count: number; // Count of retweets
	like_num: number;
	dislike_num: number;
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

interface SignUpRequest {
	firstName: string;
	lastName: string;
	username: string;
	email: string;
	password: string;
	confirmPassword: string;
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
