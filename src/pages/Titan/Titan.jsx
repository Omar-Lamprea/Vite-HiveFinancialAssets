import { useEffect, useState } from 'react'
import './Titan.scss'
import TitanGallery from '../../components/TitanGallery/TitanGallery'

const Titan = () => {
  const [titan, setTitan] = useState(false)
  const [footerImage, setFooterImage] = useState(false)
  // const imagesList =[
  //   'https://static.wixstatic.com/media/a24c3d_be4d0988919343d3a4f7cb189c84dcc4~mv2.png/v1/fill/w_1180,h_653,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/a24c3d_be4d0988919343d3a4f7cb189c84dcc4~mv2.png',
  //   'https://static.wixstatic.com/media/a24c3d_f3cc854297a84f8ba5b931f4ae7bdcdb~mv2.png/v1/fill/w_1179,h_658,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/a24c3d_f3cc854297a84f8ba5b931f4ae7bdcdb~mv2.png',
  //   'https://static.wixstatic.com/media/a24c3d_b97cd9cbe9aa4a65ae9fbc426ba76c4a~mv2.png/v1/fill/w_1180,h_655,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/a24c3d_b97cd9cbe9aa4a65ae9fbc426ba76c4a~mv2.png',
  //   'https://static.wixstatic.com/media/a24c3d_c02cbb66189b4de08028532b64ed188a~mv2.png/v1/fill/w_1180,h_656,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/a24c3d_c02cbb66189b4de08028532b64ed188a~mv2.png',
  //   'https://static.wixstatic.com/media/a24c3d_24de6a4167884c3da4f52c771b9cd275~mv2.png/v1/fill/w_1180,h_649,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/a24c3d_24de6a4167884c3da4f52c771b9cd275~mv2.png',
  //   'https://static.wixstatic.com/media/a24c3d_86f56dfc3356458798deb625bad5b5f9~mv2.png/v1/fill/w_1180,h_652,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/a24c3d_86f56dfc3356458798deb625bad5b5f9~mv2.png',
  //   'https://static.wixstatic.com/media/a24c3d_2e6c0f2c5d2046c8989a9e8d00c7f89c~mv2.png/v1/fill/w_1180,h_663,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/a24c3d_2e6c0f2c5d2046c8989a9e8d00c7f89c~mv2.png',
  //   'https://static.wixstatic.com/media/a24c3d_9359878119874a34a69e24597111c57f~mv2.png/v1/fill/w_1180,h_659,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/a24c3d_9359878119874a34a69e24597111c57f~mv2.png',
  //   'https://static.wixstatic.com/media/a24c3d_04100d9ef6e3421e8d415739d13c7ff1~mv2.png/v1/fill/w_1180,h_650,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/a24c3d_04100d9ef6e3421e8d415739d13c7ff1~mv2.png',
  //   'https://static.wixstatic.com/media/a24c3d_17aa265f0d674b2e9e8848ec1b671757~mv2.png/v1/fill/w_1179,h_658,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/a24c3d_17aa265f0d674b2e9e8848ec1b671757~mv2.png',
  //   'https://static.wixstatic.com/media/a24c3d_340b105135a5479a9f94669217d1141b~mv2.png/v1/fill/w_1180,h_650,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/a24c3d_340b105135a5479a9f94669217d1141b~mv2.png',
  //   'https://static.wixstatic.com/media/a24c3d_652edb3cfb2c46719a5e0ca299f0ceab~mv2.png/v1/fill/w_1180,h_662,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/a24c3d_652edb3cfb2c46719a5e0ca299f0ceab~mv2.png',
  //   'https://static.wixstatic.com/media/a24c3d_260f7bae760a44b1968cc98bce1172cc~mv2.png/v1/fill/w_1180,h_666,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/a24c3d_260f7bae760a44b1968cc98bce1172cc~mv2.png',
  //   'https://static.wixstatic.com/media/a24c3d_dc70e20abc0e4dff948f697b6f937a88~mv2.png/v1/fill/w_1180,h_663,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/a24c3d_dc70e20abc0e4dff948f697b6f937a88~mv2.png',
  //   'https://static.wixstatic.com/media/a24c3d_bd093099db8f4ca7b2b5bcd0ad0635bb~mv2.png/v1/fill/w_1180,h_661,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/a24c3d_bd093099db8f4ca7b2b5bcd0ad0635bb~mv2.png',
  // ]

  const titleNormalized = (title) =>{
    let text = title
    if(title.includes('HIVE’S'))
      text = title.replace('HIVE’S', '<br /> HIVE’S')
    return text
  }
  const textNormalized = (text) =>{
    const textData = {
      p1: text.split('\n')[0],
      p2: text.split('\n').slice(1).join('<br />')
    }
    return textData
  }
  useEffect(()=>{
    const env = import.meta.env
    fetch(
      `${env.VITE_CMS_BASE_URL}${env.VITE_CMS_API_URL}titan`
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setTitan(json[0])
        if(window.innerWidth >= 768)
          setFooterImage(json[0].custom_fields.titan_footer_image[0])
      });
  }, [])
  return (
    <section className="titan-page titan">
      {titan && 
        <div className='container-md'>
          <div className="titan_content">
            <div className="titan_title">
              <h3 
                dangerouslySetInnerHTML={
                  {__html: titleNormalized(titan.title.rendered)}}>
              </h3>
            </div>

            <div className="titan_description">
              <p className='p1' dangerouslySetInnerHTML={
                  {__html: textNormalized(titan.custom_fields.titan_description[0]).p1}}>
                
              </p>
              <aside className='titan_description_img'>
                <img src={titan.custom_fields.titan_logo} alt="Titan logo" />
                <span>PRESENT BY:</span>
                <img src={titan.custom_fields.titan_wipfli_logo} alt="WIPFLI LOGO" />
              </aside>

              <p
                dangerouslySetInnerHTML={
                  {__html: textNormalized(titan.custom_fields.titan_description[0]).p2}}>
              </p>
              
              <aside 
                className='titan_description_footer_image'
                style={{
                  backgroundImage: `url("${footerImage}")`
                }}
                >
                  <p>
                    “The Titan 100 are changing the way
                    that business is done in Georgia”.
                  </p>
              </aside>
              
              

            </div>
          </div>
          <section className="titan_gallery">
            <TitanGallery images={titan.custom_fields.titan_gallery_images[0]}/>
          </section>
        </div>
      }
    </section>
  )
}

export default Titan