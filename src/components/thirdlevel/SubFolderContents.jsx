import PropTypes from 'prop-types'
import './SubFolderContents.css'
import '../shared/style.css'
import ThirdLevelItem from './ThirdLevelItem'

function SubFolderContents({ items, itemBackground, positionW }) {
  return (
    <ul className='subfolderContents sharedFolder' style={{ translate: `${positionW -10}px -8px`, backgroundColor: itemBackground, boxShadow: '10px 10px 5px 0px #222222'}}>
      {items.map((item) => {
        return (
          <ThirdLevelItem key={item.id} name={item.name} itemBackground={itemBackground} id={item.id} />
        )
      })}
    </ul>
  )
}

SubFolderContents.propTypes = {
  items: PropTypes.array,
  itemBackground: PropTypes.string,
  positionW: PropTypes.number,
}

export default SubFolderContents