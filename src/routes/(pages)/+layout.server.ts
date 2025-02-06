import { BACKEND_LOCAL_URL } from "$env/static/private"
export const load = async () => {
    return {
        url: `${BACKEND_LOCAL_URL}/create-post`
    }
}