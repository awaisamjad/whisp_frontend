import { redirect } from "@sveltejs/kit";
import { BACKEND_LOCAL_URL } from "$env/static/private";
import { getDecryptedCookie } from "$lib/utils";
import Cookies from "js-cookie";

export const load = async ({ cookies }) => {
    // const authToken = Cookies.get("auth_token");
    const authToken = cookies.get("auth_token");
    if (!authToken) {
        throw redirect(302, "/feed");
    }

    const response = await fetch(`${BACKEND_LOCAL_URL}/settings`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
        },
    });

    const response_data = await response.json();
    if (response_data.isAuthenticated === false) {
        throw redirect(302, "/feed");
    }

};