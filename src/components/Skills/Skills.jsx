import './Skills.scss'
import icon1 from '../../assets/images/skills/1.svg'
import icon2 from '../../assets/images/skills/2.svg'
import icon3 from '../../assets/images/skills/3.svg'
import SkillCard from './SkillCard'

const Skills = () => {

  const data = [
    {
      id: 1,
      title: 'CONSISTENCY THROUGH VOLATILE MARKETS',
      content: 'Returns above our high yield bond fund benchmark since inception in July 2017.',
      icon: icon3
    },
    {
      id: 2,
      title: 'EXPERIENCE',
      content: 'Hive’s principals have built successful lenders and funds, with extensive experience in operations, underwriting, credit models, risk management models, and capital markets.',
      icon: icon2
    },
    {
      id: 3,
      title: 'DRIVEN BY ANALYTICS AND MACHINE LEARNING',
      content: 'Unlike other fixed income funds that only manage the risk on the front end before lending capital, Hive controls underlying unit risk on a real-time basis.',
      icon: icon1
    },
  ]

  return (
    <section className='skills'>
      <div className='skills_container d-flex flex-column'>
        {data.map((card, index) => 
          <SkillCard 
            key={card.id} 
            data={card}
            className={`${index % 2 === 0 ? "" : "card_end"}`}
          />
        )}
      </div>
    </section>
  )
}

export default Skills