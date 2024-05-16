import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router"
import { lazyLoad } from "../utils/helper"

export const routes: RouteRecordRaw[] = [
	{
		path: "/",
		name: "Home",
		component: lazyLoad(import("@/pages/home/index.vue")),
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
