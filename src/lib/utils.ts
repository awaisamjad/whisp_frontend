import Cookies from "js-cookie";
import CryptoJS from "crypto-js";

const SECRET_KEY = "your-secret-key"; // Use a strong key

// Function to encrypt and set a cookie
export function setEncryptedCookie(key: string, value: any, days = 30) {
    const encryptedValue = CryptoJS.AES.encrypt(value, SECRET_KEY).toString();
    console.log(encryptedValue);
    // Cookies.set(key, encryptedValue, { expires: days, secure: true, sameSite: "Strict" });
    Cookies.set(key, encryptedValue, { expires: days});
}

// Function to get and decrypt a cookie
export function getDecryptedCookie(key: string) {
    const encryptedValue = Cookies.get(key);
    if (!encryptedValue) return null;

    try {
        const bytes = CryptoJS.AES.decrypt(encryptedValue, SECRET_KEY);
        return bytes.toString(CryptoJS.enc.Utf8);
    } catch (error) {
        console.error("Error decrypting cookie:", error);
        return null;
    }
}
