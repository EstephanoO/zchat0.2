import { SvgNames } from "@/hooks/use-svg-org";
import { Member } from "../member/member.type";
import { PocketApi } from "../types";
import { User } from "../users/auth/user.types";
import { Channel } from "../channel/channel.type";


export interface Meet {
    id?: string
    name: string
    time1: string
    time2: string
    status: 'pending' | 'closed' | 'open'
    description?: string
    participants: string[]
    collectionName?:string
    collectionId?: string
    updated?:string
    created?:string
}

export interface Organization extends PocketApi{
    users?: string[];
    name: string;
    logo: SvgNames;
    members?: string[]
    inviteCode?:string
    expand: {
        user: User[]
        members: Member[]
        channels: Channel[]
        meet: Meet[]
    }
}
