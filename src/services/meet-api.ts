import db from "@/lib/db"
import { Meet } from "@/modules/org/org.type"

interface Values {
        name: string
        status: string,
        description: string | undefined
        orgId: string
}

export const createMeet = async (values: Values) => {
    const result =  await db.client.collection('meet').create(values)

    const resultOg = await db.client.collection('Organization').update(values.orgId, {
        meet: result.id
    })
    console.log(resultOg)
}
export const getMeet = async (meetId:string)  => {
    const result = await db.client.collection('meet').getOne(meetId)
    return result as Meet
}