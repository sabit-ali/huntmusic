"use client"

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/Navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive} >
                <Link href={'/'} >
                    <MenuItem setActive={setActive} active={active} item="Home">

                    </MenuItem>
                </Link>
                    <MenuItem setActive={setActive} active={active} item="Feature">
                    <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="/courses">Courses</HoveredLink>
                            <HoveredLink href="/blog">Blog</HoveredLink>
                            <HoveredLink href="/trialmusic">musics</HoveredLink>
                    </div>
                    </MenuItem>
                    
                        <Link href={'/contect'}>
                            <MenuItem setActive={setActive} active={active} item="Contect"></MenuItem>
                        </Link>
                    
                
            </Menu>
        </div>
    )
}

export default Navbar
