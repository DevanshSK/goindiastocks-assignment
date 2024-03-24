import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface Props {
    icon: LucideIcon;
    label: string;
    href: string;
    links: {
        name: string;
        href: string;
    }[];
}

const SidebarItem = ({ label, href, icon: Icon, links }: Props) => {
    return (
        <AccordionItem value={label} className="border-b-0">
            <AccordionTrigger className="flex items-center gap-x-2 text-sm font-[500] px-6 transition-all hover:text-slate:600 hover:bg-slate-300/20">
                <div className="flex items-center gap-x-2 ">
                    <Icon size={22} className="text-white" />
                    {label}
                </div>
            </AccordionTrigger>
            {links &&
                <AccordionContent className="flex flex-col w-full px-6">
                    {links.map((link, index) => (
                        <Link href={link.href} key={`link-item-${label}-${index}`} className="flex items-center gap-x-2 text-sm px-6 py-3 transition-all hover:text-slate:600 hover:bg-slate-300/20 hover:underline">
                            {link.name}
                        </Link>
                    ))}
                </AccordionContent>

            }
        </AccordionItem>
    )
}

export default SidebarItem