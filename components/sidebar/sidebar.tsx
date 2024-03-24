import { BellDot, CandlestickChart, CircleUserRound, MessageSquareText, X } from "lucide-react"
import SidebarItem from "./sidebar-item"
import { Accordion } from "../ui/accordion"
import { SheetClose } from "../ui/sheet"


const sidebarRoutes = [
    {
        icon: MessageSquareText,
        label: "Discussion Forum",
        href: "",
        links: [
            {
                name: "Posts",
                href: ""
            },
        ],
    },
    {
        icon: CandlestickChart,
        label: "Market Stories",
        href: "",
        links: [
            {
                name: "Sentiment",
                href: ""
            },
            {
                name: "Market",
                href: ""
            },
            {
                name: "Sector",
                href: ""
            },
            {
                name: "Watchlist",
                href: ""
            },
            {
                name: "Events",
                href: ""
            },
            {
                name: "News/Interview",
                href: ""
            },
        ],
    },
]

const Sidebar = ({ isSheet }: { isSheet: boolean }) => {
    return (
        <div className="h-full border-r flex flex-col overflow-y-auto bg-blue-900 text-white shadow-sm">
            <div className="p-6 border-b">
                <div className="logo flex items-center justify-between">
                    <div className="flex items-center gap-x-2">
                        <CircleUserRound size={25} />
                        <div className="span">Hello User</div>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <BellDot size={22} />

                        {isSheet && <SheetClose>
                            <X size={22} />
                        </SheetClose>
                        }
                    </div>
                </div>
            </div>

            <div className="sidebar-routes flex flex-col w-full">
                <Accordion type="multiple" className="flex flex-col w-full">
                    {sidebarRoutes.map((route, index) => <SidebarItem
                        key={`sidebar-item-${index}`}
                        icon={route.icon}
                        label={route.label}
                        href={route.href}
                        links={route.links}
                    />)}
                </Accordion>
            </div>
        </div>
    )
}

export default Sidebar