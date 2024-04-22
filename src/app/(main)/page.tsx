import { currentProfile } from "@/lib/current-profile"

async function HomePage() {
    const user = await currentProfile()
  return (
    <div><h1>Hola!</h1><span>{user.name}</span></div>
  )
}

export default HomePage