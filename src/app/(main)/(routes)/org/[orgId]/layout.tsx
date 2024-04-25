import { ServerSidebar } from "@/components/org/server-sidebar"

async function OrgLayout({children, params}:{children:React.ReactNode, params:{orgId:string}}) {
  

  return (
    <div className="h-full">
         <div className="hidden md:flex h-full w-72 z-20 flex-col fixed inset-y-0">
            <ServerSidebar orgId={params.orgId} />
         </div>
         <main className="h-full md:pl-72">
        {children}
        </main>
    </div>
  )
}

export default OrgLayout