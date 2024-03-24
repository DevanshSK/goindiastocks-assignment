import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface Props {
    data: {
        id: string;
        title: string;
        description: string;
        image: string;
    }
}

const StoriesCard = ({ data }: Props) => {
    const { title, description, image } = data;
    return (
        <Card className="mb-3 rounded-lg overflow-hidden mr-4 max-w-prose">
            <CardHeader className="p-0 pb-6">
                <div className="w-full aspect-video relative">
                    Image Card
                    <Image className="object-cover object-center" fill src={image} alt={title} />
                </div>
                <CardTitle className="text-xl pl-6 font-semibold">{title}</CardTitle>
                <CardDescription className="px-6">{description}</CardDescription>
            </CardHeader>
        </Card>
    )
}

export default StoriesCard