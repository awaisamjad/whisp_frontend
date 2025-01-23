export function setItemWithExpiration(key: string, value: any, expirationInMinutes: number) {
    const now = new Date();
    const expirationTime = now.getTime() + expirationInMinutes * 60 * 1000; // Convert minutes to milliseconds
    const item = {
        value: value,
        expiration: expirationTime,
    };
    localStorage.setItem(key, JSON.stringify(item));
}

export function getItemWithExpiration(key: string) {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) {
        return null; // Item does not exist
    }

    const item = JSON.parse(itemStr);
    const now = new Date();

    // Check if the item has expired
    if (now.getTime() > item.expiration) {
        localStorage.removeItem(key); // Remove expired item
        return null; // Item has expired
    }

    return item.value; // Return the stored value
}