export interface IPostResponse {
	id: number
	author_id: number
	title: string
	body: string
	image_url: string
	created_at: string
}

export interface IAuthorResponse {
	id: number
	name: string
	role: string
	place: string
	avatar_url: string
}

export interface IResponseGlobal<T> {
	status: number
	statusText: string
	data: T
}
