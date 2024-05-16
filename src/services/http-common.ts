import axios, { AxiosRequestConfig } from "axios"
import { API_URL } from "../utils/constants"
import _ from "lodash"
import { IResponseGlobal } from "@/interface/service.interface"

const http = axios.create({
	baseURL: API_URL,
})

const handleGetError = _.debounce(() => console.error("http GET error"), 200)

export async function GET<T = any>(url: string, config?: AxiosRequestConfig<any>) {
	try {
		return await http.get<never, IResponseGlobal<T>>(url, config)
	} catch (error: any) {
		if (axios.isCancel(error)) handleGetError()
		throw error
	}
}

http.interceptors.response.use(
	function (response) {
		return response
	},
	function (error) {
		if (!axios.isCancel(error)) console.error("error: ", error)
		return Promise.reject(error)
	}
)
