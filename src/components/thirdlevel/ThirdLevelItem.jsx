import './ThirdLevelItem.css'
import PropTypes from 'prop-types'

function ThirdLevelItem({name, itemBackground}) {
  return (

    <li className='subfolderContentsItems' style={{background: itemBackground}}>
      {name}
    </li>
  )
}

ThirdLevelItem.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  itemBackground: PropTypes.string,
}

export default ThirdLevelItem