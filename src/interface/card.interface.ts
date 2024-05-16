import { IAuthorResponse, IPostResponse } from "./service.interface"

export interface ICardItem extends IAuthorResponse, IPostResponse {}

export interface ICardProps {
	data: ICardItem
}
