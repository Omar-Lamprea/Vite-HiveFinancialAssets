import PropTypes from 'prop-types';

const SkillCard = ({data, className}) => {
  return (
    <section className={'skills_card ' + className}>
      <img src={data.icon} alt="" />
      <h3>{data.title}</h3>
      <p>{data.content}</p>
    </section>
  )
}

export default SkillCard

SkillCard.propTypes = {
  data: PropTypes.object.isRequired,
  className: PropTypes.string,
};