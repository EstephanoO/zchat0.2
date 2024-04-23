import db from "@/lib/db"
import { Channel } from "@/models/channel.type"
 

export const getChannels = async (orgId:string): Promise<Channel[]> => {
    const channels = await db.client.collection('Channel').getList(1, 50, {
        filter: `organizationId = '${orgId}'`
    })
    return channels.items as Channel[]
} 