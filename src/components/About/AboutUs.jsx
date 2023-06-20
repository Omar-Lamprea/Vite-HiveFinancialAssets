import { Container } from 'react-bootstrap'
import './AboutUs.scss'
import image from '../../assets/images/About-img.png'
import video1 from '../../assets/images/about/about-us.webp'
import video2 from '../../assets/images/about/about-us-02.webp'

const AboutUs = () => {
  return (
    <Container fluid className='about-us px-0 my-5 d-md-flex'>
      <div className="about-img">
        <img src={image} alt="" />
      </div>
      <div className="content">
        <div className="content_about d-flex flex-column">
          <h3>ABOUT <br /> THE FUND</h3>
          <p>Hive Financial Assets is a fixed income fund that capitalizes lenders focusing on micro-finance US marketplace.</p>
          <p>Providing balance sheet financing to consumer lenders, Hive provides a safe, diversified, and consistent return to our investors on a quarterly basis.</p>
          <p>The team is comprised of seasoned managers and owners of lending, credit modeling, analytics, and investment firms.</p>
          <p>Watch Our Story</p>
        </div>
        <div className="content_videos mt-4 d-flex flex-column flex-lg-row">
          <a href="https://cactus-4.wistia.com/medias/2z444moozm" target="_blank" rel="noopener noreferrer">
            <img src={video1} alt="" />
          </a>
          <a href="https://cactus-4.wistia.com/medias/0gx2h8e63v" target="_blank" rel="noopener noreferrer">
            <img src={video2} alt="" />
          </a>
        </div>
      </div>
    </Container>
  )
}

export default AboutUs