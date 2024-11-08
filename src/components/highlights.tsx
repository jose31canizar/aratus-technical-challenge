import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function Highlights() {
    return <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-2">
        <Card className="row-span-4">
            <CardHeader>
                <CardTitle>Trending</CardTitle>
            </CardHeader>
        </Card>
        <Card className="row-start-5">
            <CardHeader>
                <CardTitle>Trending</CardTitle>
            </CardHeader>
        </Card>
        <Card className="row-span-5">
            <CardHeader>
                <CardTitle>Trending</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
        </Card>
        <Card className="row-span-5">
            <CardHeader>
                <CardTitle>Largest Gainers</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
        </Card>
    </div>
}