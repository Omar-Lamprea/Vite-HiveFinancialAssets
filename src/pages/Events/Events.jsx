import CardEvent from "../../components/CardsEvent/CardEvent"
import './Events.scss'

const Events = () => {
  return (
    <section className="events-page">
        <CardEvent className={'white'}/>
        <CardEvent className={'gray'}/>
        <CardEvent className={'white'}/>
        <CardEvent className={'gray'}/>
    </section>
  )
}

export default Events