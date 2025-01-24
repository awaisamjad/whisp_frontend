// // import { auth_token } from "./src/routes/(auth)/login/state.svelte";
// /**
//  * Sets an item in localStorage with an expiration time.
//  *
//  * @param key - The key under which the value is stored.
//  * @param value - The value to be stored.
//  * @param expiration - The expiration time in days.
//  */
// export function setItemWithExpiration(key: string, value: any, expiration: number) {
//     const now = new Date();
//     const expirationTime = now.getTime() + expiration * 24 * 60 * 1000; // Convert minutes to milliseconds
//     const item = {
//         value: value,
//         expiry: expirationTime,
//     };
//     localStorage.setItem(key, JSON.stringify(item));
// }

// /**
//  *
//  * @param key - The key under which the value is stored.
//  * @returns any
//  */
// export function getItemWithExpiration(key: string): any {
//     const itemStr = localStorage.getItem(key);
//     if (!itemStr) {
//         return null; // Item does not exist
//     }

//     const item = JSON.parse(itemStr);
//     const now = new Date();

//     // Check if the item has expired
//     if (now.getTime() > item.expiry) {
//         localStorage.removeItem(key); // Remove expired item
//         return null; // Item has expired
//     }

//     return item.value; // Return the stored value
// }

// export async function isUserLoggedIn(): Promise<boolean> {
//     try {
//         const response = await fetch("http://localhost:8000/auth/verify", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Authorization": `Bearer ${auth_token.auth_token}`
//             }
//         });

//         if (response.ok) {
//             const data = await response.json();
//             return data.authorized; // Assuming the backend returns { authorized: true/false }
//         } else {
//             return false;
//         }
//     } catch (error) {
//         console.error("Error verifying user:", error);
//         return false;
//     }
// }


