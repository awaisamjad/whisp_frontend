import type { PageServerLoad } from './$types';

export const load = (async () => {
    return {
        data: "Hello World"
    };
}) satisfies PageServerLoad;