import StoriesCard from "../cards/stories-card";
import { ScrollArea } from "../ui/scroll-area";

import { marketStories } from "@/lib/data"; 

const Stories = () => {
    return (
        <div className="px-3 pl-2 py-2 flex flex-col h-[97vh] md:col-span-1">
            <h2 className="text-2xl font-semibold mb-3">Market Stories</h2>
            <ScrollArea className="flex flex-1 flex-col w-full">
                {marketStories.map(story => <StoriesCard key={story.id} data={story} /> )}
            </ScrollArea>
        </div>
    )
}

export default Stories