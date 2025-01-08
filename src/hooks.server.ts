// src/hooks.server.ts
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
    // Extract session cookie
    const session_id = event.cookies.get('session_id');

    // Fetch user data from session store if needed (e.g., API call to backend)
    let user = null;
    if (session_id) {
        user = { username: 'example_user' }; // Replace with actual session retrieval logic
    }

    // Add session data to locals (accessible in load functions)
    event.locals.user = user;

    return resolve(event);
};
