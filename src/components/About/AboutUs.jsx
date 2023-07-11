import { Container } from 'react-bootstrap'
import './AboutUs.scss'
import image from '../../assets/images/About-img1.png'
import video1 from '../../assets/images/about/about-us.webp'
import video2 from '../../assets/images/about/about-us-02.webp'
import { useEffect, useState } from 'react'


const AboutUs = () => {
  const [fund, setFund] = useState(false)
  const env = import.meta.env
  useEffect(() => {
    fetch(
      `${env.VITE_CMS_BASE_URL}${env.VITE_PAGE__URL}about-the-fund`
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setFund(json[0]);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container fluid className='about-us px-0 mt-5 d-md-flex' id='about-the-found'>
      {fund && 
        <>
          <div className="about-img me-md-5 me-lg-3">
            <img src={image} alt=""/>
          </div>
          <div className="content">
            <div className="content_about d-flex flex-column">
              <h3>{fund.title.rendered}</h3>
              <div 
                className='content_about d-flex flex-column'
                dangerouslySetInnerHTML={
                  { __html: fund.content.rendered }
                }>
              </div>
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
        </>
      }
    </Container>
  )
}

export default AboutUs