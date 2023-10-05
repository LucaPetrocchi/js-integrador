import PropTypes from 'prop-types'
import './SubFolderContents.css'
import ThirdLevelItem from './ThirdLevelItem'

function SubFolderContents({items, itemBackground, positionW}) {
    return(
        <ul className='subfolderContents' style={{translate: `${positionW -10}px`, backgroundColor: itemBackground }}>
            {items.map((item) => { 
                return (
                    <ThirdLevelItem key={item.id} name={item.name} itemBackground={itemBackground} id={item.id}  />
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