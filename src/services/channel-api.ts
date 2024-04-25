import db from "@/lib/db"
 

export const getChannels = async (orgId:string) => {
    const channels = await db.client.collection('Channel').getList(1, 50, {
        filter: `organizationId = '${orgId}'`
    })
    return channels.items
} 