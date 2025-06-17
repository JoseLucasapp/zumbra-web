import { useEffect, useState } from 'react'
import Menu from '../../components/menu'
import './style.css'
const About = () => {
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
                        <a href="/gallery"><li>Gallery</li></a>
                        <a href="/docs"><li>Docs</li></a>
                        <a href="https://github.com/JoseLucasapp/Zumbra-lang"><li>Repository</li></a>
                        <a href="https://github.com/JoseLucasapp/Zumbra-lang/releases"><li>Download</li></a>
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
        <section className="mainAbout">
            <div className="topAbout">
                <a href='/'><p>ZUMBRA</p></a>
                <nav className="menuDocs">
                    {
                        isMobile && (
                            <nav>
                                {menu()}
                            </nav>
                        )
                    }

                    {
                        !isMobile && (
                            <Menu currentPage="About" isMobile={isMobile} />
                        )
                    }
                </nav>
            </div>

            <div className="canva">
                <video src="/zumbra.mp4" typeof='video' autoPlay loop />
            </div>

            <div className="aboutText">
                <p className='title'>What is <span>ZUMBRA?</span></p>
                <p className='text'>
                    Zumbra is a gentle programming language designed to make code more readable and welcoming (even for those who don't code).<br />Born from the desire to bridge the gap between logic and language, Zumbra embraces simplicity, structure, and expression. Its clean syntax and human-friendly features aim to help learners, educators, and curious minds understand what code is really saying.
                    <br /><br />Hi, I'm Lucas — a developer who believes that programming doesn't have to be confusing to be powerful. Zumbra started as a small personal project, driven by a simple question: <span>“What if code could speak more clearly?”</span>.
                    <br /><br />I wanted to create something that felt welcoming. Something that even non-programmers could read and feel curious, not intimidated. That's how Zumbra was born — <span>a language shaped by simplicity, with just enough structure to express real ideas</span>.
                </p>
            </div>

            <div className="canva">
                <img src="/wild.png" alt="Enter the wild side of programming" />
            </div>

            <div className="aboutText">
                <p className='title'>Why Zebras?</p>
                <p className='text'>
                    Because penguins, elephants, and Aliens were taken.
                </p>
            </div>

            <div className="aboutText">
                <p className='title'>Who is behind ZUMBRA?</p>
                <p className='text'>
                    Lucas Freitas, or joselucasapp (for github community), i am not only a software developer, i like to think that i am a problems solver and a technology lover, Zumbra was created to
                    destroy the barriers of programming and make it more accessible to everyone. First and foremost, the thing you need to know to be a "Zumbra programmer" is ENGLISH, because all the zumbra commands are very descritive, so if you know english you will understand everything, it looks like a chat when you are coding.

                    <br /><br />
                    You can find me on <a href='https://www.instagram.com/jlucasgf' target='_blank'>instagram</a>, <a href='https://www.linkedin.com/in/jlgf524150/'>linkedin</a> and <a href="https://github.com/JoseLucasapp">github</a>. Contact me there, i love to talk about Zumbra.
                </p>
            </div>

            {
                isMenuOpen && (
                    <nav>
                        {handleMenu()}
                    </nav>
                )
            }
        </section >
    )
}

export default About