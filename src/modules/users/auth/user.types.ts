import { PocketApi } from "@/modules/types"

export interface User  {
    name:string
    email:string
    avatar:string
    username:string
    verified:boolean
    emailVisibility:boolean
    token:string
    avatarUrl:string
}

export type UserWithPocketApi = User & PocketApi