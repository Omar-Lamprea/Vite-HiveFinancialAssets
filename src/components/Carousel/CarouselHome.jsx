import Carousel from "react-bootstrap/Carousel";
import './CarouselHome.scss'
import image1 from '../../assets/images/carousel/1.webp'
import image2 from '../../assets/images/carousel/2.webp'
import image3 from '../../assets/images/carousel/3.webp'

const CarouselHome = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="caption-1">
            RELIVE THE BEST OF OUR 
            <strong className="caption-1-year"> 2022 </strong> 
            EVENTS
          </h3>

          <p className="caption-1-p">WATH THE VIDEO</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>LEARN MORE ABOUT THE FUND AND OUR STORY</h3>
          <p>LEARN ABOUT US</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />

        <Carousel.Caption className="carousel-caption-3">
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselHome