const About = ({metadata}) => {

  return (

    <div>
        <h1>About</h1>

        {metadata.map(element => {
            return (
                <h4 key={JSON.stringify(element.info)}>{element.info}</h4>
            )
        })}
    </div>
  )
};

export default About;