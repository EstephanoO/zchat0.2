import { currentProfile } from "@/lib/current-profile"
import { MediaRoom } from "../../org/[orgId]/components/media-room"
import { Input } from "@/components/ui/input"

async function RoomIdPage({params}: {params: {roomId:string}}) {
    const user = await (await currentProfile()).id
     if( !user) { return (
     <div className="lg:pl-80 h-full">
        <div className="h-full flex flex-col">
          <Input placeholder="Tu nombre" />
        </div>
     </div>
      )}
  return (
    <MediaRoom 
    video={true}
    audio={true}
    user={user}
    chatId={params.roomId}
    />
  )
}

export default RoomIdPage