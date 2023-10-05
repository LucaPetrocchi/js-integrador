import PropTypes from 'prop-types'
import './ThirdLevelItem.css'
import '../shared/style.css'

function ThirdLevelItem({name, itemBackground}) {
  return (
    <li className='thirdLevelItem sharedItem' style={{background: itemBackground}}>
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