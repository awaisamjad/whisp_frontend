export async function load({ params }) {
    const username = params.username;
    const res = await fetch(`http://localhost:8000/user/${username}`);
    if (!res.ok) {
        throw new Error(`Failed to load data for username: ${username}`);
    }

    const userData = await res.json();
    console.log(userData.username)

    return {
            username: userData.username,
    };
}