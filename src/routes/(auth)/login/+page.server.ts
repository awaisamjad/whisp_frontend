import { BACKEND_LOCAL_URL } from '$env/static/private'
import type { PageServerLoad } from './$types'
export const load: PageServerLoad = () => {
    let url = BACKEND_LOCAL_URL
    return {
        url
    }
}