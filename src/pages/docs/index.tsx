import { useEffect, useState } from "react"
import Menu from "../../components/menu"
import "./style.css"
import { docsData } from "./docs"

const data = docsData()
const Docs = () => {
    const [doc, setDoc] = useState<any>({})
    const [isMobile, setMobile] = useState(false)

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

    return (
        <section className="mainDocs">
            <div className="topDocs">
                <a href='/'><p>ZUMBRA</p></a>
                <nav className="menuDocs">
                    <Menu currentPage="Docs" isMobile={isMobile} />
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
                                                            {`${item.code}`}
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
        </section>
    )
}

export default Docs