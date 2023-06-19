import axios from "axios"

const baseDomain = "https://localhost:1337" // For strapi endpoint
const baseURL = `${baseDomain}/api/vi`

// All default configuration will goes here
export default axios.create({
    baseURL,
    headers: {
        // "Authorization": "Bearer " this will be the JWT Token
    }
})