import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"

interface FeedCardProps {
    name: string
    fecha: string
    title:string
    content:string
}

export const FeedCard = ({
    name,
    fecha,
    title,
    content
}: FeedCardProps) => {
  return (
    <Card className="w-full mx-6">
        <CardContent>
        <CardHeader>{name} - {fecha}</CardHeader>
        <CardDescription>
            <CardHeader>{title}</CardHeader>
            {content}
        </CardDescription>
</CardContent>
    </Card>
  )
}
