import { useState } from "react";
import "./style.css"

const Gallery = () => {
    const [index, setIndex] = useState(0);

    const images = [
        {
            url: "https://images.pexels.com/photos/2118656/pexels-photo-2118656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            photographer: "Magda Ehlers"
        },
        {
            url: "https://images.pexels.com/photos/619863/pexels-photo-619863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            photographer: "David Rama"
        },
        {
            url: "https://images.pexels.com/photos/47349/texture-zebra-stripes-47349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            photographer: "Pixabay"
        },
        {
            url: "https://images.pexels.com/photos/773009/pexels-photo-773009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            photographer: "Yigithan Bal"
        },
        {
            url: "https://images.pexels.com/photos/30839484/pexels-photo-30839484/free-photo-of-zebra-smiling-in-natural-habitat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            photographer: "Anil Sharma"
        },
        {
            url: "https://images.pexels.com/photos/15478061/pexels-photo-15478061/free-photo-of-zebra-in-funny-close-up.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            photographer: "Karo Artavia Solorzano"
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
            setIndex(images.length - 1);
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
                <div className="img-wrappe">
                    <img src={url} alt="" />
                </div>

            </div>
        </section>
    )
}

export default Gallery