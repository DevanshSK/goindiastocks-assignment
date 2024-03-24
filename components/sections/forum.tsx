import ForumCard from "../cards/forum-card"
import { ScrollArea } from "../ui/scroll-area"

import { forumPosts } from "@/lib/data";


const Forum = () => {
    return (
        <div className="px-3 pr-1 py-2 flex flex-col h-[97vh] md:col-span-2">
            <h2 className="text-2xl font-semibold mb-3">Discussion Forum</h2>
            <ScrollArea className="flex flex-1 flex-col w-full">
                {forumPosts.map((post, index) => <ForumCard key={`forum-post-${index}`} data={post} />)}
            </ScrollArea>
        </div>
    )
}

export default Forum