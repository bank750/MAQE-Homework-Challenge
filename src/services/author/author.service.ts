import { AxiosRequestConfig } from "axios"
import { GET } from "../http-common"
import { IAuthorResponse } from "@/interface/service.interface"

const getAllAuthors = (config: AxiosRequestConfig) => {
	return GET<IAuthorResponse[]>("/json/authors.json", config)
		.then((res) => {
			if (res?.status !== 200) throw new Error(res?.statusText)
			return res?.data
		})
		.catch((e: any) => console.error("ERROR ==> getAuthors", e))
}

export default {
	getAllAuthors,
}
