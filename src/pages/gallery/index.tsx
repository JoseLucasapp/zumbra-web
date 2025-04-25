import { useState } from "react";
import "./style.css"

const Gallery = () => {
    const [index, setIndex] = useState(0);

    const images = [
        {
            url: "/magdaEhlers.jpg",
            photographer: "Magda Ehlers"
        },
        {
            url: "/davidRama.jpg",
            photographer: "David Rama"
        },
        {
            url: "/pixabay.jpg",
            photographer: "Pixabay"
        },
        {
            url: "/yigithanBal.jpg",
            photographer: "Yigithan Bal"
        }
    ]

    const { url, photographer } = images[index];

    const handleNext = () => {
        setIndex(index + 1);
        if (index === images.length - 1) {
            setIndex(0);
        }

    }


    const handlePrevious = () => {
        setIndex(index - 1);
        if (index === 0) {
            setIndex(0);
        }
    }
    return (
        <section className="mainGallery">
            <div className="back">
                <a href="/"><p>Back</p></a>
            </div>

            <div className="creditsGallery">
                <p>Photo by {photographer}</p>
            </div>

            <div className="buttons">
                <div className="left" onClick={handlePrevious}>
                    <p>Previous</p>
                </div>

                <div className="right" onClick={handleNext}> <p>Next</p> </div>
            </div>

            <div className="gallery">
                <img src={url} alt="" />
            </div>
        </section>
    )
}

export default Gallery