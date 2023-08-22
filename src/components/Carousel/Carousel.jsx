import { useState } from 'react'
import './Carousel.css'



    const Carousel = ({ images }) => {
        const [currentIndex, setCurrentIndex] = useState(0);
      
        const Prev = () => {
            if (currentIndex === 0) {
              setCurrentIndex(images.length - 1);
            } else {
              setCurrentIndex(currentIndex - 1);
            }
          }
          
          const Next = () => {
            if (currentIndex === images.length - 1) {
              setCurrentIndex(0);
            } else {
              setCurrentIndex(currentIndex + 1);
            }
          }

    return(
        <>
        <div className="carousel">
      <img src={images[currentIndex]} alt="" />
      <div className="carousel-buttons">
        <button onClick={Prev} className="carousel-button left">
          Previous
        </button>
        <button onClick={Next} className="carousel-button right">
          Next
        </button>
      </div>
    </div>
         </>
    )
}



export default Carousel