<script lang="ts">
    import { onMount } from "svelte";
    import { auth_token } from "../(auth)/login/state.svelte";

    export async function isUserLoggedIn(): Promise<boolean> {
        console.log(auth_token)
        try {
            const response = await fetch("http://localhost:8000/auth/verify", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${auth_token.auth_token}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                console.log("DADADA::", data);
                return data.authorized; // Assuming the backend returns { authorized: true/false }
            } else {
                return false;
                // return false;
            }
        } catch (error) {
            console.error("Error verifying user:", error);
            return false;
        }
    }
    onMount(() => {
        console.log(isUserLoggedIn())
    })
</script>

Hello
