import { Container } from 'react-bootstrap'
import './Events.scss'

const Events = () => {
  return (
    <section className='events'>
      <Container className='d-md-flex justify-content-end'>
        <div className="events_content">
          <p>
            Join us for the Q1 FY2023 Investor Update to 
            discuss performance and strategy. 
            Q&A to follow.
          </p>
          <h3>Investor <br />Update</h3>
          <p className='events_code'>Q1 FY 2023</p>
          <span></span>
        </div>
      </Container>
    </section>
  )
}

export default Events