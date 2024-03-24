import { Menu } from "lucide-react"
import {
    Sheet,
    SheetContent,
    SheetTrigger
} from "@/components/ui/sheet"
import Sidebar from "../sidebar/sidebar"
import Link from "next/link"
import { Button } from "../ui/button"

const Navbar = () => {
    return (
        <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
            <Sheet>
                <SheetTrigger className="lg:hidden pr-4 hover:opacity-75 transition">
                    <Menu />
                </SheetTrigger>
                <SheetContent side="left" className="p-0 bg-blue-900">
                    <Sidebar isSheet={true} />
                </SheetContent>
            </Sheet>

            {/* Navbar Routes */}
            <div className="flex gap-x-1 md:gap-x-2 items-center ml-auto">
                <Link href="/forum">
                    <Button variant="link" size={"sm"}>Discussion Forum</Button>
                </Link>
                <Link href="/stories">
                    <Button variant="link" size={"sm"}>Market Stories</Button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar