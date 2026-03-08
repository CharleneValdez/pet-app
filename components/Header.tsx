"use client";

import Style  from "../style/Header.module.css";
import { usePathname } from "next/navigation";   

import Image from "next/image";
import Link from "next/link";
import Badge from '@mui/material/Badge';

import { TiShoppingCart } from "react-icons/ti";

function Header() {
    const pathname = usePathname();

    return (
        <nav className={`${Style.container} myShadow`}>
            <div className={Style.navContainer}>
                <div className={Style.logoContainer}>
                    <Image 
                        src="/asset/image/tailTown.png" 
                        alt="Tail town logo" 
                        width={100} 
                        height={50} 
                        priority
                    />
                </div>
                <div className={Style.navigation} aria-label="Main navigation">
                    <ul>
                        <li>
                            <Link 
                                href="/" 
                                className={`${Style.navTitleHolder} ${pathname === "/" ? Style.active : ""}`}
                                aria-current={pathname === "/" ? "page" : undefined}
                            >
                                <span>Home</span>
                            </Link>
                        </li>

                        <li>
                            <Link 
                                href="/" 
                                className={Style.navTitleHolder}
                            >
                                <span>Shop</span>
                            </Link>
                        </li>

                        <li>
                            <Link 
                                href="/" 
                                className={Style.navTitleHolder}
                            >
                                <span>About</span>
                            </Link>
                        </li>

                        <li>
                            <Link 
                                href="/" 
                                className={Style.navTitleHolder}
                            >
                                <span>Contact</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={Style.cartContainer}>
                    <Badge badgeContent={1} 
                        sx={{ "& .MuiBadge-badge": { backgroundColor: "#fd9031", color: "white" } }}>
                        <TiShoppingCart className={Style.icon}/>
                    </Badge>
                </div>

            </div>

        </nav>
    );
}
export default Header;