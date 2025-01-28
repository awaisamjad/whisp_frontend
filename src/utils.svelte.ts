import { browser } from "$app/environment";
import Cookies from "js-cookie";

export function isUserLoggedIn(): boolean {
    if (browser) {
        return Cookies.get("auth_token") !== undefined;
    }
    return false;
}

export function signOut() {
    if (browser) {
        Cookies.remove("auth_token");
        Cookies.remove("user_id");
        Cookies.remove("username");
        location.reload();
    }
}