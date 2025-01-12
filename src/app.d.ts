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

interface Post {
	id: number;
	content: string;
	username: string;
	createdAt: string;
	updatedAt: string;
	likeNum: number;
	dislikeNum: number;
}

// Following and Followers are a list of user ids (numbers) of those they are following/followed by
interface User {
	id: number;
	username: string;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	createdAt: string;
	updatedAt: string;
	posts: Post[];
	feed: Post[];
	following: number[];
	followers: number[];
	bio: string;
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


export {};
