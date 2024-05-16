import { AxiosRequestConfig } from "axios"
import { GET } from "../http-common"
import { IPostResponse } from "@/interface/service.interface"

const getAllPosts = (config: AxiosRequestConfig) => {
	return GET<IPostResponse[]>("/json/posts.json", config)
		.then((res) => {
			if (res?.status !== 200) throw new Error(res?.statusText)
			return res?.data
		})
		.catch((e: any) => console.error("ERROR ==> getAuthors", e))
}

export default {
	getAllPosts,
}
