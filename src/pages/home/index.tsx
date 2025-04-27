import './style.css'

const Home = () => {
    return (
        <section className="main">
            <div className="topLeft">
                <p>Enter the wild side of<br />programming.</p>
            </div>

            <div className="credits">
                <p>Photo by Magda Ehlers</p>
            </div>

            <div className="welcome">
                <p>Welcome to</p>
            </div>

            <div className="zumbra">
                <p>ZUMBRA</p>
            </div>

            <div className="menu">
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
        </section>
    )
}

export default Home;