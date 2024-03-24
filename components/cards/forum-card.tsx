import { Heart, Eye, MessageSquare, Share2} from "lucide-react";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "../ui/badge"

interface Props{
    data: {
        name: string;
        sector: number;
        description: string;
        likes: string;
        views: string;
        comments: string;
        timecreated: number;
        image: string;
    };
}

const ForumCard = ({data}: Props) => {
    const {name, sector, description, likes, views, comments, timecreated, image} = data;
    return (
        <Card className="mb-3 pb-0 mr-4">
            <CardHeader className="border flex flex-row py-3 border-b-0 items-center justify-between">
                <div className="flex items-center gap-x-2">
                    <Avatar>
                        <AvatarImage src={image} alt={name} />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <h4 className="text-lg font-medium">{name}</h4>
                    <Badge variant="default" className="bg-blue-900">Sector {sector}</Badge>
                </div>
                <Badge variant="secondary">{timecreated} mins ago.</Badge>
            </CardHeader>
            <CardContent>
                <p>
                    {description}
                </p>
            </CardContent>
            <CardFooter className="border-t flex flex-row p-3 items-center justify-evenly">
                <div className="flex flex-row items-center gap-x-2">
                    <Heart size={22} />
                    <span className="text-sm">{likes}</span>
                </div>
                <div className="flex flex-row items-center gap-x-2">
                    <Eye size={22} />
                    <span className="text-sm">{views}</span>
                </div>
                <div className="flex flex-row items-center gap-x-2">
                    <MessageSquare size={22} />
                    <span className="text-sm">{comments}</span>
                </div>
                <div className="flex flex-row items-center gap-x-2">
                    <Share2 size={22} />
                    <span className="text-sm">Share</span>
                </div>
            </CardFooter>
        </Card>
    )
}

export default ForumCard