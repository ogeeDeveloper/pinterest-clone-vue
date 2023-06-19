import { createRouter, createWebHistory} from "vue-router"

import routes from "../router/routes/combine"

const routes = [
    {
        path: '/',
        redirect: '/'
    }
].concat(routes)

const router = createRouter({history: createWebHistory(), routes})

export default router