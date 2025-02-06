import { BACKEND_LOCAL_URL } from "$env/static/private"
export const load = async () => {
    console.log(BACKEND_LOCAL_URL)
    return {
        url: `${BACKEND_LOCAL_URL}/create-post`
    }
}