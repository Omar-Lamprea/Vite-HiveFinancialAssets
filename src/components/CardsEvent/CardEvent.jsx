import './CardEvent.scss'
import eventImage from '../../assets/images/event1.webp'
const CardEvent = ({className}) => {
  return (
    <div className={'container-events '+ className}>
      <article className="card-event">
        <aside className="card-event_date">
          <div className="month">
            <p>MAY</p>
          </div>
          <div className="day">
            <p>4</p>
          </div>
          <div className="year">
            <p>2023</p>
          </div>
        </aside>

        <aside className='card-event_image'>
          <img src={eventImage} alt="event image" />
        </aside>

        <aside className='card-event_data'>
          <div className="data-header">
            <p className='data-header_title'>Q1 INVESTOR EVENT</p>
            <p className='data-header_subtitle'>Quarterly update for investors</p>
          </div>
          <div className="data-content">
            <p>
              Our investors joined us for the Q1 FY 2023 
              update and to discuss performance and strategy. 
              This was followed by a Q&A session.
            </p>
          </div>
        </aside>

      </article>
    </div>
  )
}

export default CardEvent