// import type { LayoutServerLoad } from './$types';
// import { redirect } from '@sveltejs/kit';

// export const load = (async ({ cookies }) => {
//     async function isAuthenticated(): Promise<boolean> {
//         const authToken = cookies.get("auth_token");
//         if (!authToken) {
//             return false;
//         }

//         const response = await fetch(`${import.meta.env.VITE_BACKEND_LOCAL_URL}/feed`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer ${authToken}`,
//             },
//         });

//         const response_data = await response.json();
//         console.log(response_data);
//         if (response_data.isAuthenticated === false) {
//             return false;
//         }
//         return true;
//     }
//     return {};
// }) satisfies LayoutServerLoad;