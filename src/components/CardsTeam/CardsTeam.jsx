import PropTypes from 'prop-types';
import './CardsTeam.scss'
import React from 'react';
import iconLink from '../../assets/icons/linkedin-brown.webp'

const CardsTeam = ({user, className}) => {
  const lines = user.description.split("\n");
  
  const descriptionFormated = lines.map((line, index) => 
    <React.Fragment key={index}>
      {line}<br/><br/>
    </React.Fragment>
  )


  return (
    <article className={"card-team " + className} id={"user-"+ user.id}>
      <div className="card-team_img">
        <img src={user.photo} alt="" />
      </div>
      <div className="card-team_data">
        <div className="title">
          <p className='title_name'>{user.name}</p>
          <p className='title_title'>{user.title}</p>
        </div>
        <div className="description">
          <p>{descriptionFormated}</p>
        </div>
        <div className="linkedIn">
          <a href={user.linkedIn} target="_blank" rel="noopener noreferrer">
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