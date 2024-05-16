import { defineAsyncComponent } from "vue"
import loadingComponent from "@/components/LoadingComponent.vue"
import _ from "lodash"
import { IAuthorResponse, IPostResponse } from "@/interface/service.interface"
// import { IPostedDate } from "@/interface/helper.interface"

export const lazyLoad = (loader: any) =>
	defineAsyncComponent({
		loader: () => loader,
		loadingComponent,
	})

type PostKeys = keyof IPostResponse
type AuthorKeys = keyof IAuthorResponse
interface ILeftJoinParams {
	array1: IPostResponse[]
	array2: IAuthorResponse[]
	key1: PostKeys
	key2: AuthorKeys
}

export const leftJoin = ({ array1, array2, key1, key2 }: ILeftJoinParams) =>
	_.map(array1, (item1) => {
		const match = _.find(array2, (item2) => item1[key1] === item2[key2])
		if (match) {
			// Merge the objects and omit only the 'id' key from array2
			return _.merge(_.clone(item1), _.omit(match, "id"))
		} else {
			return item1
		}
	})

export const formatPostedDate = (inputDate: string) => {
	const date = new Date(inputDate)

	// Define options for formatting
	const options: any = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "2-digit",
		minute: "2-digit",
		hour12: false, // For 24-hour format
	}

	// Format the date
	const formattedDate: string = date.toLocaleDateString("en-US", options)

	// Get hours and minutes separately to format them as "HH.MM"
	const hours = String(date.getHours()).padStart(2, "0")
	const minutes = String(date.getMinutes()).padStart(2, "0")

	// Construct the final formatted string
	const finalFormattedDate = `posted on ${formattedDate.replace(", ", ", ")}`
	return finalFormattedDate
}
