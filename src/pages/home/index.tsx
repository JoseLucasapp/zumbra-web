import { useEffect, useState } from 'react'
import './style.css'

const Home = () => {

    const [isMobile, setMobile] = useState(false)
    const [isMenuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        handleISMobile()
    }, [])
    const handleISMobile = () => {
        if (window.innerWidth < 800) {
            setMobile(true)
        } else {
            setMobile(false)
        }
    }

    const handleMenu = () => {
        return (
            <div className='menu-modal'>
                <nav>
                    <ul>
                        <a href="/about"><li>About</li></a>
                        <a href="/docs"><li>Docs</li></a>
                        <a href="https://github.com/JoseLucasapp/Zumbra-lang/releases"><li>Download</li></a>
                        <a href="/gallery"><li>Gallery</li></a>
                        <a href="https://github.com/JoseLucasapp/Zumbra-lang"><li>Repository</li></a>

                    </ul>
                </nav>
            </div>
        )
    }

    const menu = () => {
        return (
            <div className="menu-bar-icon" onClick={() => setMenuOpen(!isMenuOpen)}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        )
    }


    return (
        <section className="main">
            <div className="topLeft">
                <p>Enter the wild side of<br />programming.</p>
            </div>

            <div className="credits">
                {
                    isMobile && (
                        <p>Photo by Taryn Elliott</p>
                    )
                }
                {
                    !isMobile && (
                        <p>Photo by Magda Ehlers</p>
                    )
                }

            </div>

            <div className="welcome">
                <p>Welcome to</p>
            </div>

            <div className="zumbra">
                <p>ZUMBRA</p>
            </div>

            {
                isMobile && (
                    <nav>
                        {menu()}
                    </nav>
                )
            }

            {
                !isMobile && (
                    <div className="menu">
                        <nav>
                            <ul>
                                <a href="/about"><li>About</li></a>
                                <a href="/docs"><li>Docs</li></a>
                                <a href="https://github.com/JoseLucasapp/Zumbra-lang/releases"><li>Download</li></a>
                                <a href="/gallery"><li>Gallery</li></a>
                                <a href="https://github.com/JoseLucasapp/Zumbra-lang"><li>Repository</li></a>
                            </ul>
                        </nav>
                    </div>
                )
            }

            {
                isMenuOpen && (
                    <nav>
                        {handleMenu()}
                    </nav>
                )
            }
        </section>
    )
}

export default Home;