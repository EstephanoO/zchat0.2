import { ServerSidebar } from "@/components/org/server-sidebar"

async function OrgLayout({children, params}:{children:React.ReactNode, params:{id:string}}) {
  return (
    <div className="h-full">
         <div className="hidden md:flex h-full w-60 z-20 flex-col fixed inset-y-0">
            <ServerSidebar />
            <div className="h-full md:pl-60"> 
        {children}
            </div>
 </div>
    </div>
  )
}

export default OrgLayout