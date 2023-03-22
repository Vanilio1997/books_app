
import { IResponseBooksInterface } from "types/IResponse";


type TResponseBookType = string[] | IResponseBooksInterface 

export interface IGetBooksQueryInterface {
    data : TResponseBookType
    isLoading: boolean
}