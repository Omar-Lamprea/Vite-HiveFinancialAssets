import { Container } from 'react-bootstrap'
import './Team.scss'
import { useContextGlobal } from '../../context/global.context'
import CardsTeam from '../../components/CardsTeam/CardsTeam'

const Team = () => {
  const {state} = useContextGlobal()

  return (
    <Container className="team-page">
      <h3 className='team-page_title'>MEET THE TEAM</h3>

      <section className='container-team'>
        {state.team &&
          state.team.map((user, index) => 
          <CardsTeam 
            key={user.id} 
            user={user}
            className={`${index % 2 === 0 ? "" : "card_end"}`}
          />)
        }
      </section>

    </Container>
  )
}

export default Team