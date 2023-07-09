import PropTypes from 'prop-types';
import './CardsTeam.scss'
import iconLink from '../../assets/icons/linkedin-brown.webp'

const CardsTeam = ({user, className}) => {

  const textNormalized = (text) =>{
    return text.replaceAll(/\r\n/g, '<br />')
  }

  return (
    <article className={"card-team " + className} id={"user-"+ user.id}>
      <div className="card-team_img">
        <img src={user.featured_image_src} alt="member team" />
      </div>
      <div className="card-team_data">
        <div className="title">
          <p className='title_name'>{user.title.rendered}</p>
          <p 
            className='title_title'
            dangerouslySetInnerHTML={{__html: user.excerpt.rendered}}>
          </p>
        </div>
        <div className="description">
          <p
            dangerouslySetInnerHTML={
              {__html: textNormalized(user.custom_fields.member_description[0])}
            }>
          </p>
        </div>
        <div className="linkedIn">
          <a href={user.custom_fields.social_linkedin} target="_blank" rel="noopener noreferrer">
            <img src={iconLink} alt="linkedIn" />
          </a>
        </div>
      </div>
    </article>
  )
}

export default CardsTeam

CardsTeam.propTypes = {
  user: PropTypes.object.isRequired,
  className: PropTypes.string,
};