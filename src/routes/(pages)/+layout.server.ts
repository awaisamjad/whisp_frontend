import type { LayoutServerLoad } from './$types';

export const load = (async ({ cookies }) => {
    async function isAuthenticated(): Promise<boolean> {
        const authToken = cookies.get("auth_token");
        if (!authToken) {
            return false;
        }

        const response = await fetch(`${import.meta.env.VITE_BACKEND_LOCAL_URL}/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${authToken}`,
            },
        });

        const response_data = await response.json();
        console.log("response data: ",  response_data);
        if (!response.ok) {
            return false;
        }
        return true;
    }
    return {
        isAuthenticated: await isAuthenticated()
    };
}) satisfies LayoutServerLoad;