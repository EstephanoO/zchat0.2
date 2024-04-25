import { getOrg } from "@/services/org-api"
import { Header } from "./components/header"
import { User } from "stream-chat"
import { currentProfile } from "@/lib/current-profile"
import { MediaRoom } from "./components/media-room"
import { FeedCard } from "./components/feed-card"

type OrgState = {
  apiKey: string
  user: User
  token: string
}

interface OrgIdPageProps {
  params: {
    orgId: string
  }
}

async function OrgIdPage({
  params
}:OrgIdPageProps) {

  const user = await currentProfile()


  const org = await getOrg(params.orgId)

  if(!org) { return <div className="lg:pl-80 h-full">
    <div className="h-full flex flex-col">
      Empty State
    </div>
  </div>}

  return (
      <div className="h-full flex flex-col bg-neutral-200/50">
        <Header org={org}/>
        <div className="flex justify-center mt-4">
          <FeedCard name="estephano" fecha="21-12-2023" content="descricion" title="titulo"/>
        </div>
      </div>
  )
}

export default OrgIdPage