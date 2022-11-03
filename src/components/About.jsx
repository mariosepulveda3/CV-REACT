import './About.scss';

const About = ({metadata}) => {

  return (

    <div className='about'>
        <h2 className='h2'>Sobre mi</h2>

        {metadata.map(element => {
            return (
                <p className='p' key={JSON.stringify(element.info)}>{element.info}</p>
            )
        })}
    </div>
  )
};

export default About;