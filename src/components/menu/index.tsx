import { useState } from "react";
import "./style.css"
const pages = [
    {
        name: "About",
        path: "/about"
    },
    {
        name: "Gallery",
        path: "/gallery"
    },
    {
        name: "Docs",
        path: "/docs"
    },
    {
        name: "Repository",
        path: "https://github.com/JoseLucasapp/Zumbra-lang"
    },
    {
        name: "Download",
        path: "https://github.com/JoseLucasapp/Zumbra-lang/releases"
    }
]

type MenuProps = {
    currentPage: string,
    isMobile: boolean,
}
export default function Menu({ currentPage, isMobile }: MenuProps) {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <nav className="topMainMenu">
            <ul>
                {
                    !isMobile ? pages.map((item, index) => {
                        if (item.name === currentPage) {
                            return null;
                        }
                        return (
                            <a href={item.path} key={index}><li>{item.name}</li></a>
                        )
                    }) : (
                        <div className="menuMobile">
                            <button onClick={() => setIsOpen(!isOpen)} className="menuToggle">
                                {isOpen ? 'Close' : 'Menu'}
                            </button>

                            {isOpen && (
                                <ul>
                                    {pages.map((item, index) => {
                                        if (item.name === currentPage) {
                                            return;
                                        }
                                        return (
                                            <li key={index}>
                                                <a href={item.path}>{item.name}</a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                        </div>
                    )


                }

            </ul>
        </nav>

    )
}