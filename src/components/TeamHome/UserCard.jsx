import PropTypes from 'prop-types';

const UserCard = ({user}) => {
  return (
    <section className="user_team">
      <div 
        className="user_photo"
        style={{backgroundImage: `url('${user.photo}')`}}>
      </div>
      
      <aside className='container-user-data'>
        <h3>{user.name}</h3>
        <p>{user.title}</p>
      </aside>
    </section>
  )
}

export default UserCard

UserCard.propTypes = {
  user: PropTypes.object.isRequired,
};