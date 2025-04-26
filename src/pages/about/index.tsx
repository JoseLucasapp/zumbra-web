import Menu from '../../components/menu'
import './style.css'
const About = () => {
    return (
        <section className="mainAbout">
            <div className="top">
                <a href='/'><p>ZUMBRA</p></a>
                <nav className="menuAbout">
                    <Menu />
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
        </section >
    )
}

export default About