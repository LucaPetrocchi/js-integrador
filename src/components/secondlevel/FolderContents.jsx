import PropTypes from 'prop-types'
import './FolderContents.css'
import '../shared/style.css'
import SecondLevelItem from './SecondLevelItem'

function FolderContents({ items, subItems, itemBackground }) {

  return (
    <ul
      className='folderContents sharedFolder'
      style={{ translate: `-10px 44.9px`, backgroundColor: itemBackground,  boxShadow: '10px 10px 5px 0px #222222' }}
    >
      {items.map((item, index) => {
        return (<div key={index}>
          <SecondLevelItem
            key={item.id}
            item={item}
            subItems={subItems}
            itemBackground={itemBackground}
          />
        </div>
        )
      })}
    </ul>
  )
}

export default FolderContents

FolderContents.propTypes = {
  items: PropTypes.array,
  subItems: PropTypes.array,
  itemBackground: PropTypes.string,
  offset: PropTypes.number,
}