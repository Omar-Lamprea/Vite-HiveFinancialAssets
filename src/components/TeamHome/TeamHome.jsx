import { Container } from 'react-bootstrap'
import './TeamHome.scss'
import UserCard from './UserCard'

const TeamHome = () => {

  const data = [
    {
      id: 1,
      name: 'JP James',
      title: 'Strategy',
      photo: '/src/assets/images/team/foto_team_1.webp'
    },
    {
      id: 2,
      name: 'MICHAEL SCHWARTZ',
      title: 'CAO',
      photo: '/src/assets/images/team/foto_team_2.webp'
    },
    {
      id: 3,
      name: 'SANDEEP PRABHAKARA',
      title: 'CRO',
      photo: '/src/assets/images/team/foto_team_3.webp'
    },
  ]
  return (
    <Container className='team_home'>
      <div className="team_home_container">
        <h3 className='title mb-3'>MEET THE TEAM</h3>
        <p className='content_data'>
          Hive’s team has decades of experience building lending,
          analytics, and investment firms.
        </p>
      </div>
      <div className="container-users d-flex flex-column flex-md-row">
        {data.map((user) => <UserCard key={user.id} user={user}/>)}
      </div>
      <button>LEARN MORE</button>
    </Container>
  )
}

export default TeamHome