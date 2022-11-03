import './Habilities.scss';

const Habilities = ({habilities}) => {
  return (
    <div>
        <h2>Habilidades</h2>
        {habilities.map((hability) =>
        <p>{hability}</p>
        )}
    </div>
  )
}

export default Habilities;