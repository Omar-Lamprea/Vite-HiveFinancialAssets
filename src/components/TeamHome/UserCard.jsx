import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserCard = ({user}) => {
  return (
    <section className="user_team">
      <Link to={"/team?id=" + user.id}>
        <div 
          className="user_photo"
          style={{backgroundImage: `url('${user.featured_image_src}')`}}>
        </div>
        
        <aside className='container-user-data'>
          <h3>{user.title.rendered}</h3>
          <p 
            dangerouslySetInnerHTML={{__html: user.excerpt.rendered}}>
          </p>
        </aside>
      </Link>
    </section>
  )
}

export default UserCard

UserCard.propTypes = {
  user: PropTypes.object.isRequired,
};