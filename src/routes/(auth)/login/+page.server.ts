import { error, redirect } from '@sveltejs/kit'

export const load = async (event) => {
    const token = event.cookies.get("auth_token")
    console.log("TOKEN:::::", token)
}

export const actions = {
    default: async ({ request, fetch, cookies }) => {
        const data = await request.formData()
        const email = data.get('email')
        const password = data.get('password')

        if (!email || !password) {
            throw error(400, 'Email and password are required')
        }

        console.log('email:', email)

        // Make the fetch request to your backend service
        const response = await fetch('http://localhost:8000/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })
        console.log("RESPONSE:::::", response)
        if (!response.ok) {
            const result = await response.json()
            throw error(401, result.error_message || 'Invalid credentials')
        }

        const result = await response.json()
        const jwtToken = result.token

        // Set the cookie with Secure, HttpOnly flags for production environments
        cookies.set('auth_token', jwtToken, {
            httpOnly: true, // Prevent access from JavaScript
            secure: process.env.NODE_ENV === 'production', // Use secure cookie in production
            path: '/',
            maxAge: 60 * 60 * 24 // 1 day (adjust as needed)
        })

        console.log("COKOEIEES:::::", cookies.get('auth_token'))
        // Optionally redirect or return user information
        throw redirect(303, `/user/${result.username}`)
    }
}
