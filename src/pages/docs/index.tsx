import { useEffect, useState } from "react"
import Menu from "../../components/menu"
import "./style.css"
import { docsData } from "./docs"

const data = docsData()
const Docs = () => {
    const [doc, setDoc] = useState<any>({})
    const [isMobile, setMobile] = useState(false)
    const [isMenuOpen, setMenuOpen] = useState(false)


    const reserved: Record<string, string> = {
        "var": "#e06c75",
        "import": "#e06c75",
        "or": "#e06c75",
        "and": "#e06c75",
        "let": "#e06c75",
        "const": "#e06c75",
        "fct": "#61afef",
        "return": "#56b6c2",
        "show": "#61afef",
        "input": "#61afef",
        "toint": "#61afef",
        "tofloat": "#61afef",
        "tostring": "#61afef",
        "tobool": "#61afef",
        "date": "#61afef",
        "organize": "#61afef",
        "sum": "#61afef",
        "dictvalues": "#61afef",
        "dictkeys": "#61afef",
        "sendemail": "#61afef",
        "sendwhatsapp": "#61afef",
        "randominteger": "#61afef",
        "randomfloat": "#61afef",
        "bhaskara": "#61afef",
        "capitalize": "#61afef",
        "tolowercase": "#61afef",
        "touppercase": "#61afef",
        "removewhitespaces": "#61afef",
        "indexof": "#61afef",
        "addtoarraystart": "#61afef",
        "removefromarray": "#61afef",
        "addtoarrayend": "#61afef",
        "min": "#61afef",
        "max": "#61afef",
        "sizeof": "#61afef",
        "first": "#61afef",
        "last": "#61afef",
        "allbutfirst": "#61afef",
        "addtodict": "#61afef",
        "getfromdict": "#61afef",
        "deletefromdict": "#61afef",
        "clear": "#61afef",


        "if": "#c678dd",
        "else": "#c678dd",
        "while": "#c678dd",

        // Booleans e null
        "true": "#d19a66",
        "false": "#d19a66",
        "null": "#c678dd",


        // Operadores e símbolos
        "<<": "#fca503",
        "<": "#98c379",
        ">": "#98c379",
        "<=": "#98c379",
        ">=": "#98c379",
        "=": "#98c379",
        "==": "#98c379",
        "!=": "#98c379",
        "(": "#98c379",
        ")": "#98c379",
        "{": "#98c379",
        "}": "#98c379",
        "]": "#98c379",
        "[": "#98c379",
        ",": "#5c6370",
        "+": "#98c379",
        "-": "#98c379",
        "*": "#98c379",
        "//": "#abb2bf",
        "/": "#98c379",
        "%": "#98c379",
    };

    const stringColor = "#98c379";


    const changeColor = (txt: string) => {
        return txt.replace(
            /(\/\/[^\n]*|"[^"]*"|'[^']*'|\b[a-zA-Z_]+\b|<<|>>|==|!=|\/|[{}()[\];.,+\-*%=<>])/gm,
            (match) => {
                // Comentário de linha
                if (match.startsWith("//")) {
                    return `<span style="color: #5c6370">${match}</span>`;
                }

                if (/^".*"$|^'.*'$/.test(match)) {
                    return `<span style="color: ${stringColor}">${match}</span>`;
                }

                const word = match.toLowerCase();
                if (reserved[word]) {
                    return `<span style="color: ${reserved[word]}">${match}</span>`;
                }

                return match;
            }
        );
    };


    const handleShowCode = (text: string) => {
        return (
            <div
                style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}
                dangerouslySetInnerHTML={{ __html: changeColor(text) }}
            />
        );
    };


    useEffect(() => {
        setDoc(data[0])
        handleISMobile()
    }, [])

    const handleSelect = (e: any) => {
        setDoc(data[e.target.value])
    }

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

        <section className="mainDocs">
            <div className="topDocs">
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
                            <Menu currentPage="Docs" isMobile={isMobile} />
                        )
                    }
                </nav>
            </div>

            <div className="docsContent">
                <div className="contentInfo">
                    <div className="selectContent">
                        <select name="contentDoc" id="contentDoc" onChange={handleSelect}>
                            {
                                data.map((item, index) => {
                                    return (
                                        <option value={index}>{item.title}</option>
                                    )
                                })
                            }
                        </select>
                    </div>

                    <h1>{doc.title}</h1>
                    <p>{doc.description}</p>
                </div>
                <div className="contentData">

                    {
                        doc.content && doc.content.map((item: any) => {
                            return (
                                <div className="content">
                                    <h2>{item.title}</h2>
                                    <ul>
                                        {
                                            item.data.map((item: any) => {
                                                if (item.link) {
                                                    return (
                                                        <a href={item.link} target="_blank"><li><p>{item.text}</p></li></a>
                                                    )
                                                }

                                                if (item.code) {
                                                    return (
                                                        <li className="codeLine">
                                                            {handleShowCode(item.code)}
                                                        </li>
                                                    )
                                                } else {
                                                    return (
                                                        <li><p>{item.text}</p></li>
                                                    )
                                                }

                                            })
                                        }
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>
            </div>


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

export default Docs