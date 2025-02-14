import { redirect } from "@sveltejs/kit";
export const load = async ({ cookies }) => {
    const authToken = cookies.get("auth_token");
    if (!authToken) {
        throw redirect(302, "/feed");
    }

    const response = await fetch(`${import.meta.env.VITE_BACKEND_LOCAL_URL}/settings`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
        },
    });

    const response_data = await response.json();
    console.log(response_data);
    if (response_data.isAuthenticated === false) {
        throw redirect(302, "/feed");
    }

};